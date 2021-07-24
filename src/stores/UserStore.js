import { action, observable } from 'mobx';

export default class UserStore {
  @observable params = {
    firstName: '',
    lastName: '',
    email: ''
  };

  @action bindOption = (info) => {
    this.params.firstName = info.firstName;
    this.params.lastName = info.lastName;
    this.params.email = info.email;
  };
}
