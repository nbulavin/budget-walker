import React from 'react';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import ResultingInfoSection from '../../components/Feed/ResultingInfoSection/index';
import BucketsList from '../../components/Feed/BucketsList';
import { BackgroundDiv } from '../../components/common/styles';
import { LeftAlignedDiv, RightAlignedDiv } from './styles';
import ExpenseCategoriesList from '../../components/Feed/ExpenseCategoriesList';
import OperationsList from '../../components/Feed/OperationsList';
import SavingsList from '../../components/Feed/SavingsList';

class Feed extends React.Component {
  render() {
    const leftColumnWidth = 60;
    const rightColumnWidth = 100 - leftColumnWidth;

    return (
      <BackgroundDiv>
        <BackgroundTitle text="Главная" />
        <ResultingInfoSection />
        <div>
          <LeftAlignedDiv blockWidth={`${leftColumnWidth}%`}>
            <BucketsList />
            <ExpenseCategoriesList />
            <SavingsList />
          </LeftAlignedDiv>
          <RightAlignedDiv blockWidth={`${rightColumnWidth}%`}>
            <OperationsList />
          </RightAlignedDiv>
        </div>
      </BackgroundDiv>
    );
  }
}

export default Feed;
