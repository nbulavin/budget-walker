import { action, observable, makeObservable } from 'mobx';

export default class BucketItem {
  constructor(rawBucketItem) {
    this.createBucketItem(rawBucketItem);

    makeObservable(this, {
      name: observable,
      bucketType: observable,
      id: observable,
      provider: observable,
      currentBalance: observable,
      createBucketItem: action
    });
  }

  name;

  bucketType;

  id;

  provider;

  currentBalance;

  createBucketItem = (rawBucketItem) => {
    this.name = rawBucketItem.name;
    this.bucketType = rawBucketItem.bucketType;
    this.id = rawBucketItem.id;
    this.provider = rawBucketItem.provider;
    this.currentBalance = rawBucketItem.currentBalance;
  };
}
