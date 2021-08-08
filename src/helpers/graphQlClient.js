import { GraphQLClient } from 'graphql-request';

const apiClient = new GraphQLClient('http://localhost:3001/graphql');

export default apiClient;
