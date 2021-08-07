import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppDiv } from './styles';
import Placeholder from './Placeholder/index';
import Login from './Login/index';

function isEmpty(str) {
  console.log(str)
  return (!str || str.length === 0 );
}

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/">
          {
            isEmpty(localStorage.getItem('Authorization')) ? <Redirect to="/login" /> : <Placeholder />
          }
        </Route>
      </Switch>
    </AppDiv>
  );
}

export default App;
