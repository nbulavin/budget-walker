import { apiClient, authApiClient } from './graphQlClient';
import ErrorObject from './ErrorObject';

export function anonRequestSender(requestSchema, requestData, successCallback, failureCallback, finallyCallback) {
  apiClient.request(requestSchema, requestData)
    .then((data) => {
      successCallback(data);
    }).catch((response) => {
      failureCallback(response);
    }).finally(() => {
      finallyCallback();
    });
}

export function authRequestSender(requestSchema, requestData, successCallback, failureCallback, finallyCallback) {
  authApiClient.request(requestSchema, requestData)
    .then((data) => {
      successCallback(data);
    }).catch((response) => {
      console.error('authApiClient error', response);
      const error = new ErrorObject(response.response.errors[0]);

      const { message, isAuthorizationError } = error;
      failureCallback(message, isAuthorizationError);
    }).finally(() => {
      finallyCallback();
    });
}
