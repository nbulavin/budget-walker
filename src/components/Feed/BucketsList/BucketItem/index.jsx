import React from 'react';
import {
  ItemDiv, ItemFooter, ItemHeader, ItemTitle, PriceInFooter,
} from './styles';

const BucketItem = ({
  itemProvider, itemTitle, itemType, itemActualBalance, backgroundColor,
}) => (
  <ItemDiv backgroundColor={backgroundColor}>
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

export default BucketItem;
