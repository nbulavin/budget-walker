import { action, observable, makeObservable } from 'mobx';
import BucketItem from './BucketItem';

export default class BucketListStore {
  constructor() {
    makeObservable(this);
  }

  @observable items = [];
  @observable totalItemsCount = 0;

  @action bindBuckets = (items, count) => {
    this.items = items.map((elm) => new BucketItem(elm));
    this.totalItemsCount = count;
  };
}
