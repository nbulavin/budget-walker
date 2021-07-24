import UserStore from './UserStore';

class mainStore {
  constructor() {
    this.UserStore = new UserStore();
  }
}

export default new mainStore();