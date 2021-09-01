import { action, observable, makeObservable } from 'mobx';

export default class LoginStore {
  constructor() {
    makeObservable(this, {
      params: observable,
      bindCredentialsEmail: action,
      bindCredentialsPassword: action,
      startProgress: action,
      finishProgress: action,
      cleanStore: action
    });
  }

  params = {
    email: '',
    password: '',
    inProgress: false,
  };

  bindCredentialsEmail = (email) => {
    this.params.email = email;
  };

  bindCredentialsPassword = (password) => {
    this.params.password = password;
  };

  startProgress = () => {
    this.params.inProgress = true;
  };

  finishProgress = () => {
    this.params.inProgress = false;
  };

  cleanStore = () => {
    this.params.email = '';
    this.params.password = '';
    this.params.inProgress = false;
  };
}
