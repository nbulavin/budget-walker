import { action, observable, makeObservable } from 'mobx';
import BucketItem from './BucketItem';

export default class BucketListStore {
  constructor() {
    makeObservable(this);
  }

  @observable items = [];

  @action bindBuckets = (info) => {
    this.items = info.map((elm) => new BucketItem(elm));
  };
}
