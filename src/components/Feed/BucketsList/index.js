import React from 'react';
import { BucketsListDiv, ListDiv, ListHeader } from './styles';
import BucketItem from "./BucketItem";

class BucketsList extends React.Component {

  render() {
    return (
      <BucketsListDiv>
        <ListHeader>Счета</ListHeader>
        <ListDiv>
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
        </ListDiv>
      </BucketsListDiv>
    );
  }
}

export default BucketsList;
