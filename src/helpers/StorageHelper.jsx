import stringHelper from './stringHelper';

class StorageHelper {

  addAuthToken = (token) => (localStorage.setItem('Authorization', token));

  getAuthToken = () => {
    return localStorage.getItem('Authorization');
  }

  isUserLoggedIn = () => {
    const authToken = this.getAuthToken();
    return !stringHelper.isEmpty(authToken);
  }

  clearAuthToken = () => {
    localStorage.removeItem('Authorization');
  }
}

export default new StorageHelper();