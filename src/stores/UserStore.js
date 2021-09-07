import { action, observable, makeObservable } from 'mobx';

export default class UserStore {
  constructor() {
    makeObservable(this, {
      params: observable,
      bindOption: action,
    });
  }

  params = {
    firstName: '',
    lastName: '',
    email: '',
  };

  bindOption = (info) => {
    this.params.firstName = info.firstName;
    this.params.lastName = info.lastName;
    this.params.email = info.email;
  };
}
