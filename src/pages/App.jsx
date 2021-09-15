import React from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThreeDots } from '@agney/react-loading';
import AppDiv from './styles';
import Placeholder from './Placeholder';
import Login from './Login';
import Feed from './Feed';
import ROUTE_URLS from '../const/routeUrls';
import stringHelper from '../helpers/stringHelper';
import GET_USER_ME from '../graphql/AppGql';
import StorageHelper from '../helpers/StorageHelper';
import { authRequestSender } from '../helpers/requestSender';

const PrivateRoute = (props) => {
  if (!StorageHelper.isUserLoggedIn) return <Redirect to={ROUTE_URLS.login} />;
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
    const tokenInStorage = StorageHelper.authToken;
    if (stringHelper.isPresent(tokenInStorage)) {
      authRequestSender(
        GET_USER_ME,
        {},
        this.handleRequestSuccess,
        this.handleRequestFailure,
        this.applyRequestFinalAction
      )
    } else {
      this.setState({ inProgress: false });
      console.log('finish mounting')
    }
  }

  handleRequestSuccess = (data) => {
    const { me } = data;
    this.props.UserStore.bindAuthToken(me.authorizationToken);
    this.props.UserStore.bindUserInfo(me);
  }

  handleRequestFailure = (message, isAuthorizationError) => {
    if (isAuthorizationError) {
      StorageHelper.clearAuthToken();
      this.props.UserStore.clearAuthToken();
    }
  }

  applyRequestFinalAction = () => {
    this.setState({ inProgress: false });
    console.log('finish mounting')
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
                StorageHelper.isUserLoggedIn ? <Redirect to={ROUTE_URLS.feed} /> : <Redirect to={ROUTE_URLS.login} />
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
