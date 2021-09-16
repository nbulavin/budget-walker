import StringHelper from './StringHelper';

class StorageHelper {
  addAuthToken = (token) => (window.localStorage.setItem('Authorization', token));

  get authToken() {
    return window.localStorage.getItem('Authorization');
  }

  get isUserLoggedIn() {
    const token = this.authToken;
    return !StringHelper.isEmpty(token);
  }

  clearAuthToken = () => (window.localStorage.removeItem('Authorization'));
}

export default new StorageHelper();
