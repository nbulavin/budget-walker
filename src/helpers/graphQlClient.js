import { GraphQLClient } from 'graphql-request';
import { showAuthToken } from './authorization';

export const apiClient = new GraphQLClient('http://localhost:3001/graphql');

export const authApiClient = new GraphQLClient(
  'http://localhost:3001/graphql',
  { headers: { Authorization: showAuthToken() } },
);
