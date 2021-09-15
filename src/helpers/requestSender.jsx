import { GraphQLClient } from 'graphql-request';
import ErrorObject from './ErrorObject';
import StorageHelper from './StorageHelper';

const API_URL = 'http://localhost:3001/graphql';

export function anonRequestSender(
  requestSchema,
  requestData,
  successCallback,
  failureCallback,
  finallyCallback
) {
  const client = new GraphQLClient(API_URL)

  client.request(requestSchema, requestData)
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
  requestSchema,
  requestData,
  successCallback,
  failureCallback,
  finallyCallback
) {
  const client = new GraphQLClient(API_URL, { headers: { Authorization: StorageHelper.authToken } })

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
