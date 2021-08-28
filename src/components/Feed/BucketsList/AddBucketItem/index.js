import React from 'react';
import { ItemDiv } from '../BucketItem/styles';
import { PlusIcon } from './styles';

class AddBucketItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ItemDiv onClick={this.props.openAddBucketModal}>
        <PlusIcon />
      </ItemDiv>
    );
  }
}

export default AddBucketItem;
