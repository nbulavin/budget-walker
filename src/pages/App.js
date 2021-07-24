import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppDiv } from './styles';
import Placeholder from './Placeholder/index';
import Login from './Login/index';

function App() {
  return (
    <AppDiv>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Placeholder} />
      </Switch>
    </AppDiv>
  );
}

export default App;
