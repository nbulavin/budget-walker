import React from 'react';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import { BackgroundDiv } from "../../components/common/styles";

class Feed extends React.Component {
  render() {
    return (
      <BackgroundDiv>
        <BackgroundTitle text="Дэшборд" />
        <p>Здесь будет дэшборд</p>
      </BackgroundDiv>
      )
  }
}

export default Feed;