import { gql } from 'graphql-request';

const GET_USER_ME = gql`
  query GetMe {
    me {
      firstName
      lastName
      email
      authorizationToken
    }
  }
`;

export default GET_USER_ME;
