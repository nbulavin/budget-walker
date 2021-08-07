import UserStore from './UserStore';
import LoginStore from './LoginStore';

class MainStore {
  constructor() {
    this.UserStore = new UserStore();
    this.LoginStore = new LoginStore();
  }
}

export default new MainStore();
