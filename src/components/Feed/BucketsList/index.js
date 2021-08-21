import React from 'react';
import { observer, inject } from 'mobx-react';
import { gql } from 'graphql-request';
import { ThreeDots } from '@agney/react-loading';
import {
  BucketsListDiv, ListDiv, ListHeader, LoadingDiv,
} from './styles';
import BucketItem from './BucketItem';
import apiClient from '../../../helpers/graphQlClient';
import { showAuthToken } from '../../../helpers/authorization';

const GET_BUCKETS_LIST = gql`
  query RetrieveBucketsList {
    getBucketsList {
      list {
        id
        name
        bucketType
      }
      totalCount
    }
  }
`;

@inject('BucketListStore')
@observer
class BucketsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListErrors: [],
      dataFetched: false,
      listErrors: [],
    };
  }

  componentDidMount() {
    const rootObject = this;
    const client = apiClient;
    const bucketsStore = this.props.BucketListStore;

    client.setHeader('Authorization', showAuthToken());
    client.request(GET_BUCKETS_LIST)
      .then((data) => {
        if (data.length > 0) {
          bucketsStore.bindBuckets(data.getBucketsList.list);
        }
      }).catch((response) => {
        rootObject.setState({ listErrors: response.response.errors.map((elm) => (elm.message)) });
      }).finally(() => {
        rootObject.setState({ dataFetched: true });
      });
  }

  render() {
    const { dataFetched } = this.state;
    const bucketsList = this.props.BucketListStore.items;

    return (
      <BucketsListDiv>
        <ListHeader>Счета</ListHeader>
        {dataFetched === false
        && (
        <LoadingDiv>
          <ThreeDots width="100" />
        </LoadingDiv>
        )}
        {dataFetched === true
          && (
          <ListDiv>
            {
              bucketsList.map((item) => (
                <BucketItem
                  itemProvider="ВТБ"
                  itemTitle={item.name}
                  itemType={item.bucketType}
                  itemActualBalance="1882"
                />
              ))
            }
          </ListDiv>
          )}
      </BucketsListDiv>
    );
  }
}

export default BucketsList;
