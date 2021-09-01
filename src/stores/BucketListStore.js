import { action, observable, makeObservable } from 'mobx';
import BucketItem from './BucketItem';

export default class BucketListStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      totalItemsCount: observable,
      bindBuckets: action
    });
  }

  items = [];
  totalItemsCount = 0;

  bindBuckets = (items, count) => {
    this.items = items.map((elm) => new BucketItem(elm));
    this.totalItemsCount = count;
  };
}
