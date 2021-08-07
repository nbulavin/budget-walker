import { action, observable, makeObservable } from 'mobx';

export default class LoginStore {
  constructor() {
    makeObservable(this)
  }

  @observable params = {
    email: '',
    password: '',
    inProgress: false
  };

  @action
  bindCredentialsEmail = (email) => {
    this.params.email = email;
  };

  @action
  bindCredentialsPassword = (password) => {
    this.params.password = password;
  };

  @action
  startProgress = () => {
    this.params.inProgress = true
  };

  @action
  finishProgress = () => {
    this.params.inProgress = false
  };
}
