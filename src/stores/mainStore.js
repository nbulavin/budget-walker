import UserStore from './UserStore';
import LoginStore from './LoginStore';

class mainStore {
  constructor() {
    this.UserStore = new UserStore();
    this.LoginStore = new LoginStore();
  }
}

export default new mainStore();