import stringHelper from './stringHelper';

class StorageHelper {

  addAuthToken = (token) => (window.localStorage.setItem('Authorization', token));

  get authToken() {
    return window.localStorage.getItem('Authorization');
  }

  get isUserLoggedIn() {
    const authToken = this.authToken;
    return !stringHelper.isEmpty(authToken);
  }

  clearAuthToken = () => (window.localStorage.removeItem('Authorization'));
}

export default new StorageHelper();