import { apiClient, authApiClient } from './graphQlClient';
import ErrorObject from './ErrorObject';

export function anonRequestSender(requestSchema, requestData, successCallback, failureCallback, finallyCallback) {
  apiClient.request(requestSchema, requestData)
    .then((data) => {
      successCallback(data);
    }).catch((response) => {
      console.error('anonRequestSender error', response);
      failureCallback(response.message);
    }).finally(() => {
      finallyCallback();
    });
}

export function authRequestSender(
  authToken,
  requestSchema,
  requestData,
  successCallback,
  failureCallback,
  finallyCallback
) {
  const client = apiClient;
  client.setHeader('Authorization', authToken);

  client.request(requestSchema, requestData)
    .then((data) => {
      successCallback(data);
    }).catch((response) => {
      console.error('authApiClient error', response);
      let error;
      if (response.response?.errors[0]) {
        error = new ErrorObject(response.response.errors[0]);
      } else {
        error = {
          message: response.message,
          isAuthorizationError: true,
        };
      }

      const { message, isAuthorizationError } = error;
      failureCallback(message, isAuthorizationError);
    }).finally(() => {
      finallyCallback();
    });
}
