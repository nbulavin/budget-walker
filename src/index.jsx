import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import MainStore from './stores/MainStore';

const stores = {
  MainStore,
  UserStore: MainStore.UserStore,
  LoginStore: MainStore.LoginStore,
  BucketListStore: MainStore.BucketListStore,
  NewBucketStore: MainStore.NewBucketStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
