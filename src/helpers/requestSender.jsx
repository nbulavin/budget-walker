import { apiClient, authApiClient } from './graphQlClient';

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
      failureCallback(response);
    }).finally(() => {
      finallyCallback();
    });
}
