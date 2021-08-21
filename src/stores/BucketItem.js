import { action, observable, makeObservable } from 'mobx';

export default class BucketItem {
  constructor(rawBucketItem) {
    this.createBucketItem(rawBucketItem);

    makeObservable(this);
  }

  @observable name;

  @observable bucketType;

  @observable id;

  @action createBucketItem = (rawBucketItem) => {
    this.name = rawBucketItem.name;
    this.bucketType = rawBucketItem.bucketType;
    this.id = rawBucketItem.id;
  };
}
