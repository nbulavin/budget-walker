import { gql } from 'graphql-request';

export const GET_BUCKETS_LIST = gql`
  query RetrieveBucketsList {
    getBucketsList {
      list {
        id
        name
        bucketType
        provider
        currentBalance
      }
      totalCount
    }
  }
`;
