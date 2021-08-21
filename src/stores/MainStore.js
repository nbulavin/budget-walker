import UserStore from './UserStore';
import LoginStore from './LoginStore';
import BucketListStore from './BucketListStore';

class MainStore {
  constructor() {
    this.UserStore = new UserStore();
    this.LoginStore = new LoginStore();
    this.BucketListStore = new BucketListStore();
  }
}

export default new MainStore();
