import styled from 'styled-components';
import { FullWidthDiv } from '../../common/styles';
import COLORS from '../../../const/colors';

export const BucketsListDiv = styled(FullWidthDiv)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const ListHeader = styled.div`
  background-color: ${COLORS.blockHeaderBackground};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 10px;
  font-size: 30px;
  color: ${COLORS.title};
  text-align: left;
  height: 40px;
`;

export const ListDiv = styled.div`
  padding: 0 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  height: auto;
  max-height: ${(props) => (props.expanded ? 'auto' : '136px')}; // replace auto with 5000px to enable animation
  // transition: max-height .3s ease-in-out;
`;

export const LoadingDiv = styled.div`
  display: inline-flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const ListFooter = styled.div`
  background-color: ${COLORS.blockHeaderBackground};
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 0 10px;
  font-size: 20px;
  color: ${COLORS.title};
  text-align: left;
  height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-around;
  line-height: 0.5em;
`;

export const ListFooterText = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.title};
`;
