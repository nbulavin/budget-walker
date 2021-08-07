import { gql } from 'graphql-request';

export const SIGN_IN_MUTATION = gql`
  mutation SignNeIn($email: String!, $password: String!) {
    signIn(
      email: $email
      password: $password
    ) {
      errors
      token
      me {
        firstName
        lastName
        email
      }
    }
  }
`;
