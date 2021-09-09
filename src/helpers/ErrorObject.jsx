import { action, observable, computed, makeObservable } from 'mobx';

export default class ErrorObject {
  constructor(rawErrorData) {
    this.createErrorObject(rawErrorData);

    makeObservable(this, {
      message: observable,
      path: observable,
      extensions: observable,
      locations: observable,
      createErrorObject: action,
      isAuthorizationError: computed,
    });
  }

  message = '';

  path = [];

  extensions = [];

  locations = [];

  get isAuthorizationError() {
    return !!(this.extensions && this.extensions.code && this.extensions.code === 'unauthorized');
  }
  createErrorObject = (rawErrorData) => {
    this.message = rawErrorData.message;
    this.path = rawErrorData.path;
    this.extensions = rawErrorData.extensions;
    this.locations = rawErrorData.locations;
  };
}
