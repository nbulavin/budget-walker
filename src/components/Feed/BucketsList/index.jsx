import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { ThreeDots } from '@agney/react-loading';
import BucketItem from './BucketItem';
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
import { authRequestSender } from '../../../helpers/requestSender';
import ROUTE_URLS from '../../../const/routeUrls';

const BucketsList = inject('BucketListStore', 'UserStore')(observer(class BucketsList extends React.Component {
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
    authRequestSender(
      GET_BUCKETS_LIST,
      {},
      this.handleRequestSuccess,
      this.handleRequestFailure,
      this.applyRequestFinalAction
    );
  }

  handleRequestSuccess = (data) => {
    const { BucketListStore } = this.props;

    BucketListStore.bindBuckets(data.getBucketsList.list, data.getBucketsList.totalCount);
  }

  handleRequestFailure = (message, isAuthorizationError) => {
    if (isAuthorizationError === true) {
      this.props.history.push(ROUTE_URLS.login)
    }
    this.setState({ listErrors: [message] });
  }

  applyRequestFinalAction = () => {
    this.setState({ dataFetched: true });
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

export default withRouter(BucketsList);
