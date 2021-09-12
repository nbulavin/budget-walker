import { action, observable, makeObservable } from 'mobx';

export default class LoginStore {
  constructor() {
    makeObservable(this, {
      params: observable,
      errors: observable,
      startProgress: action,
      bindCredentialsEmail: action,
      bindCredentialsPassword: action,
      collectRequestErrors: action,
      collectCommonErrors: action,
      finishProgress: action,
      cleanStore: action,
    });
  }

  params = {
    email: '',
    password: '',
    inProgress: false,
  };

  errors = {
    email: [],
    password: [],
    common: [],
  }

  startProgress = () => {
    this.params.inProgress = true;
    this.errors.email = [];
    this.errors.password = [];
    this.errors.common = [];
  };

  bindCredentialsEmail = (email) => {
    this.params.email = email;
  };

  bindCredentialsPassword = (password) => {
    this.params.password = password;
  };

  collectRequestErrors = (errors) => {
    this.errors.email = errors.email;
    this.errors.password = errors.password;
  }

  collectCommonErrors = (commonErrors) => {
    this.errors.common = commonErrors;
  }

  finishProgress = () => {
    this.params.inProgress = false;
  };

  cleanStore = () => {
    this.params.email = '';
    this.params.password = '';
    this.params.inProgress = false;
  };
}
