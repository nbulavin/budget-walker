import React from 'react';
import { ItemDiv } from '../BucketItem/styles';
import { PlusIcon } from './styles';

class AddBucketItem extends React.Component {
  render() {
    return (
      <ItemDiv>
        <PlusIcon />
      </ItemDiv>
    );
  }
}

export default AddBucketItem;
