import { action, observable, makeObservable } from 'mobx';

export default class UserStore {
  constructor() {
    makeObservable(this, {
      params: observable,
      authToken: observable,
      bindAuthToken: action,
      bindUserInfo: action
    });
  }

  params = {
    firstName: '',
    lastName: '',
    email: '',
  };

  authToken = null;

  bindUserInfo = (info) => {
    this.params.firstName = info.firstName;
    this.params.lastName = info.lastName;
    this.params.email = info.email;
  };

  bindAuthToken = (token) => {
    this.authToken = token;
  }

  clearAuthToken = () => {
    this.authToken = null;
  }

}
