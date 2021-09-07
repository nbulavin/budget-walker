import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppDiv from './styles';
import Placeholder from './Placeholder';
import Login from './Login';
import Feed from './Feed';
import { isLoggedIn } from '../helpers/authorization';
import ROUTE_URLS from '../const/routeUrls';

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route path={ROUTE_URLS.feed} component={Feed} />
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
    </AppDiv>
  );
}

export default App;
