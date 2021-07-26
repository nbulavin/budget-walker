import { action, observable } from 'mobx';

export default class LoginStore {
  @observable params = {
    email: '',
    password: ''
  };

  @action bindCredentialsEmail = (email) => {
    this.params.email = email;
  };

  @action bindCredentialsPassword = (password) => {
    this.params.password = password;
  };
}
