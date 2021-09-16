import React from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThreeDots } from '@agney/react-loading';
import { AppDiv, LoadingDiv } from './styles';
import Placeholder from './Placeholder';
import Login from './Login';
import Feed from './Feed';
import ROUTE_URLS from '../const/routeUrls';
import StringHelper from '../helpers/StringHelper';
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
    const tokenInStorage = StorageHelper.authToken;
    if (StringHelper.isPresent(tokenInStorage)) {
      authRequestSender(
        GET_USER_ME,
        {},
        this.handleRequestSuccess,
        this.handleRequestFailure,
        this.applyRequestFinalAction,
      );
    } else {
      this.setState({ inProgress: false });
    }
  }

  handleRequestSuccess = (data) => {
    const { me } = data;
    const { bindAuthToken, bindUserInfo } = this.props.UserStore;

    bindAuthToken(me.authorizationToken);
    bindUserInfo(me);
  }

  handleRequestFailure = (message, isAuthorizationError) => {
    if (isAuthorizationError) {
      StorageHelper.clearAuthToken();
      this.props.UserStore.clearAuthToken();
    }
  }

  applyRequestFinalAction = () => {
    this.setState({ inProgress: false });
  }

  render() {
    const { inProgress } = this.state;

    return (
      <AppDiv>
        {inProgress === true
        && (
          <LoadingDiv>
            <ThreeDots width="100" />
          </LoadingDiv>
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
