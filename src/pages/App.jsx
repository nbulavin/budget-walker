import React from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThreeDots } from '@agney/react-loading';
import AppDiv from './styles';
import Placeholder from './Placeholder';
import Login from './Login';
import Feed from './Feed';
import { isLoggedIn, showAuthToken } from '../helpers/authorization';
import ROUTE_URLS from '../const/routeUrls';
import stringHelper from '../helpers/stringHelper';
import GET_USER_ME from '../graphql/AppGql';
import { apiClient } from '../helpers/graphQlClient';
import ErrorObject from '../helpers/ErrorObject';
import StorageHelper from '../helpers/StorageHelper';

const PrivateRoute = (props) => {
  if (!isLoggedIn()) return <Redirect to={ROUTE_URLS.login} />;
  return <Route {...props} />;
};

const App = inject('UserStore')(observer(class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inProgress: true,
    };
  }

  componentDidMount() {
    console.log('start mounting')
    const tokenInStorage = showAuthToken();
    if (stringHelper.isPresent(tokenInStorage)) {
      const client = apiClient
      client.setHeader('Authorization', tokenInStorage)
      client.request(GET_USER_ME)
        .then((data) => {
          this.props.UserStore.bindAuthToken(tokenInStorage);
          this.props.UserStore.bindUserInfo(data.me);
        }).catch((response) => {
          let error;
          if (response.response?.errors[0]) {
            error = new ErrorObject(response.response.errors[0]);
          } else {
            error = {
              message: response.message,
              isAuthorizationError: true,
            };
          }

          const { isAuthorizationError } = error;
          if (isAuthorizationError) {
            StorageHelper.clearAuthToken();
            this.props.UserStore.clearAuthToken();
          }
        }).finally(() => {
          this.setState({ inProgress: false });
          console.log('finish mounting')
        });

      // this.props.UserStore.bindAuthToken(tokenInStorage);
    } else {
      this.setState({ inProgress: false });
      console.log('finish mounting')
    }

    // this.setState({ inProgress: false });

    // console.log('finish mounting')
  }

  render() {
    const { inProgress } = this.state;

    return (
      <AppDiv>
        {inProgress === true
        && (
          <ThreeDots width="100" />
        )}
        {inProgress === false
        && (
          <Switch>
            <PrivateRoute path={ROUTE_URLS.feed} component={Feed} />
            <Route path={ROUTE_URLS.login} component={Login} />
            <Route exact path={ROUTE_URLS.mainPage}>
              {
                isLoggedIn() ? <Redirect to={ROUTE_URLS.feed} /> : <Redirect to={ROUTE_URLS.login} />
              }
            </Route>
            <Route>
              <Placeholder />
            </Route>
          </Switch>
        )}
      </AppDiv>
    );
  }
}));

export default App;
