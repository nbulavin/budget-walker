import UserStore from './UserStore';
import LoginStore from './LoginStore';
import BucketListStore from './BucketListStore';
import NewBucketStore from './NewBucketStore';

class MainStore {
  constructor() {
    this.UserStore = new UserStore();
    this.LoginStore = new LoginStore();
    this.BucketListStore = new BucketListStore();
    this.NewBucketStore = new NewBucketStore();
  }
}

export default new MainStore();
