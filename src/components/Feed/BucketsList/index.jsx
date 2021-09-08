import React from 'react';
import { observer, inject } from 'mobx-react';
import { ThreeDots } from '@agney/react-loading';
import BucketItem from './BucketItem';
import { authApiClient } from '../../../helpers/graphQlClient';
import AddBucketItem from './AddBucketItem';
import TextButton from '../../common/buttons/TextButton';
import { GET_BUCKETS_LIST } from '../../../graphql/Feed/BucketListGql';
import Modal from '../../common/Modal';
import AddBucketPopup from './AddBucketPopup';
import {
  BucketsListDiv,
  ListDiv,
  ListFooter,
  ListFooterText,
  ListHeader,
  LoadingDiv,
} from './styles';

const BucketsList = inject('BucketListStore')(observer(class BucketsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFetched: false,
      listErrors: [],
      expandedList: false,
      addBucketModalOpened: false,
    };
  }

  componentDidMount() {
    const rootObject = this;
    const { BucketListStore } = this.props;

    authApiClient.request(GET_BUCKETS_LIST)
      .then((data) => {
        BucketListStore.bindBuckets(data.getBucketsList.list, data.getBucketsList.totalCount);
      }).catch((response) => {
        rootObject.setState({ listErrors: response.response.errors.map((elm) => (elm.message)) });
      }).finally(() => {
        rootObject.setState({ dataFetched: true });
      });
  }

  toggleListExpanding = () => {
    this.setState((prevState) => ({ expandedList: !prevState.expandedList }));
  }

  openAddBucketModal = () => {
    this.setState({ addBucketModalOpened: true });
  }

  closeAddBucketModal = () => {
    this.setState({ addBucketModalOpened: false });
  }

  render() {
    const { dataFetched, expandedList, addBucketModalOpened } = this.state;
    const { BucketListStore: { items, totalItemsCount } } = this.props;
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
                  backgroundColor={item.color}
                />
              ))
            }
            <AddBucketItem openAddBucketModal={this.openAddBucketModal} />
          </ListDiv>
        )}
        <ListFooter>
          <ListFooterText>
            Всего счетов: {totalItemsCount}
          </ListFooterText>
          <TextButton buttonName={expandingButtonText} onClickAction={this.toggleListExpanding} />
        </ListFooter>
        <Modal active={addBucketModalOpened} closeModal={this.closeAddBucketModal}>
          <AddBucketPopup closeModal={this.closeAddBucketModal} />
        </Modal>
      </BucketsListDiv>
    );
  }
}));

export default BucketsList;
