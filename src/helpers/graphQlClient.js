import { GraphQLClient } from 'graphql-request';
import { showAuthToken } from './authorization';

const API_URL = 'http://localhost:3001/graphql';

export const apiClient = new GraphQLClient(API_URL);

export const authApiClient = new GraphQLClient(
  API_URL,
  { headers: { Authorization: showAuthToken() } },
);
