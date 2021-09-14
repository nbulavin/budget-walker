import UserStore from './UserStore';
import BucketListStore from './BucketListStore';

class MainStore {
  constructor() {
    this.UserStore = new UserStore();
    this.BucketListStore = new BucketListStore();
  }
}

export default new MainStore();
