import { action, observable, makeObservable } from 'mobx';

const DEFAULT_BUCKET_PARAMS = {
  name: '',
  provider: '',
  description: '',
  bucketType: null,
  expectedEnrollment: null,
  color: '',
  inProgress: false,
};

const BUCKET_ERRORS = {
  name: [],
  provider: [],
  description: [],
  bucketType: [],
  expectedEnrollment: [],
  color: [],
  common: [],
};

export default class NewBucketStore {
  constructor() {
    makeObservable(this, {
      params: observable,
      errors: observable,
      startProgress: action,
      bindBucketInfo: action,
      collectRequestErrors: action,
      collectCommonErrors: action,
      finishProgress: action,
      clearStore: action,
    });
  }

  params = DEFAULT_BUCKET_PARAMS;

  errors = BUCKET_ERRORS;

  startProgress = () => {
    this.params.inProgress = true;
    this.errors.common = BUCKET_ERRORS;
  };

  bindBucketInfo = (field, value) => {
    switch (field) {
      case 'name':
        this.params.name = value;
        break;
      case 'provider':
        this.params.provider = value;
        break;
      case 'description':
        this.params.description = value;
        break;
      case 'bucketType':
        this.params.bucketType = value;
        break;
      case 'expectedEnrollment':
        this.params.expectedEnrollment = value;
        break;
      case 'color':
        this.params.color = value;
        break;
      default:
        console.error('Incorrect field name provided:', field);
    }
  };

  bindCredentialsEmail = (email) => {
    this.params.email = email;
  };

  bindCredentialsPassword = (password) => {
    this.params.password = password;
  };

  collectRequestErrors = (errors) => {
    const keys = Object.keys(errors);

    if (keys.includes('name')) this.params.name = errors.name;
    if (keys.includes('provider')) this.params.provider = errors.provider;
    if (keys.includes('provider')) this.params.description = errors.description;
    if (keys.includes('provider')) this.params.bucketType = errors.bucketType;
    if (keys.includes('provider')) this.params.expectedEnrollment = errors.expectedEnrollment;
    if (keys.includes('provider')) this.params.color = errors.color;
  }

  collectCommonErrors = (errors) => {
    this.errors.common = errors;
  }

  finishProgress = () => {
    this.params.inProgress = false;
  };

  clearStore = () => {
    this.params.inProgress = false;
    this.params.name = '';
    this.params.provider = '';
    this.params.description = '';
    this.params.bucketType = null;
    this.params.expectedEnrollment = null;
    this.params.color = '';
    this.errors = BUCKET_ERRORS;
  };
}
