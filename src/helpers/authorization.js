import stringHelper from './stringHelper';

export function addAuthToken(token) {
  localStorage.setItem('Authorization', token);
}

export function showAuthToken() {
  return localStorage.getItem('Authorization');
}

export function isLoggedIn() {
  const authToken = showAuthToken();
  return !stringHelper.isEmpty(authToken);
}
