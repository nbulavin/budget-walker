import { GraphQLClient } from 'graphql-request';

export const apiClient = new GraphQLClient('http://localhost:3001/graphql')