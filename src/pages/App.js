import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppDiv } from './styles';
import Placeholder from './Placeholder/index';
import Login from './Login/index';
import { isLoggedIn } from "../helpers/authorization";

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/">
          {
            !isLoggedIn() ? <Redirect to="/login" /> : <Placeholder />
          }
        </Route>
      </Switch>
    </AppDiv>
  );
}

export default App;
