import React from 'react';
import { ItemDiv } from '../BucketItem/styles';
import { PlusIcon } from './styles';

const AddBucketItem = ({ openAddBucketModal }) => (
  <ItemDiv onClick={openAddBucketModal}>
    <PlusIcon />
  </ItemDiv>
);

export default AddBucketItem;
