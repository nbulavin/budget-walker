import React from 'react';
import {
  ItemDiv, ItemFooter, ItemHeader, ItemTitle, PriceInFooter,
} from './styles';

class BucketItem extends React.Component {
  render() {
    const {
      itemProvider, itemTitle, itemType, itemActualBalance,
    } = this.props;

    return (
      <ItemDiv>
        <ItemHeader>
          {itemProvider}
        </ItemHeader>
        <ItemTitle>
          {itemTitle}
        </ItemTitle>
        <ItemFooter>
          <div>
            {itemType}
          </div>
          <PriceInFooter>
            {itemActualBalance}
            {' ₽'}
          </PriceInFooter>
        </ItemFooter>
      </ItemDiv>
    );
  }
}

export default BucketItem;
