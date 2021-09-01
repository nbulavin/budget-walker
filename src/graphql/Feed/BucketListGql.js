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

export const ADD_BUCKET_ITEM = gql`
  mutation CreateBucketItem(
    $name: String!,
    $bucketType: TypeEnum!,
    $expectedEnrollment: String,
    $color: String,
    $description: String,
    $provider: String
  )  {
    createBucket(
      name: $name
      bucketType: $bucketType
      expectedEnrollment: $expectedEnrollment
      color: $color
      description: $description
      provider: $provider
      ) {
      bucket {
        id
        name
        bucketType
        color
        provider
      }
      errors
    }
  }
`;
