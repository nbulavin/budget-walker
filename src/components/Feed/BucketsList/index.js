import React from 'react';
import { observer, inject } from 'mobx-react';
import { ThreeDots } from '@agney/react-loading';
import {
  BucketsListDiv, ListDiv, ListFooter, ListFooterText, ListHeader, LoadingDiv,
} from './styles';
import BucketItem from './BucketItem';
import apiClient from '../../../helpers/graphQlClient';
import { showAuthToken } from '../../../helpers/authorization';
import AddBucketItem from "./AddBucketItem";
import TextButton from "../../common/buttons/TextButton";
import { GET_BUCKETS_LIST } from "../../../graphql/Feed/BucketListGql";

@inject('BucketListStore')
@observer
class BucketsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListErrors: [],
      dataFetched: false,
      listErrors: [],
      expandedList: false
    };
  }

  componentDidMount() {
    const rootObject = this;
    const client = apiClient;
    const bucketsStore = this.props.BucketListStore;

    client.setHeader('Authorization', showAuthToken());
    client.request(GET_BUCKETS_LIST)
      .then((data) => {
        bucketsStore.bindBuckets(data.getBucketsList.list, data.getBucketsList.totalCount);
      }).catch((response) => {
        rootObject.setState({ listErrors: response.response.errors.map((elm) => (elm.message)) });
      }).finally(() => {
        rootObject.setState({ dataFetched: true });
      });
  }

  toggleListExpanding = () => {
    this.setState({ expandedList: !this.state.expandedList })
  }

  render() {
    const { dataFetched, expandedList } = this.state;
    const { items, totalItemsCount } = this.props.BucketListStore;
    const expandingButtonText = expandedList ? 'Свернуть' : 'Развернуть';

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
          <ListDiv expanded={expandedList}>
            {
              items.map((item) => (
                <BucketItem
                  key={item.id}
                  itemProvider={item.provider}
                  itemTitle={item.name}
                  itemType={item.bucketType}
                  itemActualBalance={item.currentBalance}
                />
              ))
            }
            <AddBucketItem />
          </ListDiv>
        )}
        <ListFooter>
          <ListFooterText>Всего счетов: {totalItemsCount}</ListFooterText>
          <TextButton buttonName={expandingButtonText} onClickAction={this.toggleListExpanding}/>
        </ListFooter>
      </BucketsListDiv>
    );
  }
}

export default BucketsList;
