import React from 'react';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import ResultingInfoSection from '../../components/Feed/ResultingInfoSection/index';
import BucketsList from "../../components/Feed/BucketsList";
import {BackgroundDiv, FullWidthDiv} from '../../components/common/styles';
import { BlockDiv } from "../../components/common/styles";
import {InlinedDiv, LeftAlignedDiv, RightAlignedDiv} from "./styles";

class Feed extends React.Component {
  render() {
    return (
      <BackgroundDiv>
        <BackgroundTitle text="Главная" />
        <ResultingInfoSection />
        <div>
          <LeftAlignedDiv blockWidth={'60%'}>
            <BucketsList />
            <FullWidthDiv>
              <p>Здесь будет список категорий расходов</p>
            </FullWidthDiv>
          </LeftAlignedDiv>
          <RightAlignedDiv blockWidth={'40%'}>
            <FullWidthDiv>
              <p>Здесь будет лента операций</p>
            </FullWidthDiv>
          </RightAlignedDiv>
        </div>
      </BackgroundDiv>
      )
  }
}

export default Feed;