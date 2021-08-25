import styled from 'styled-components';
import { FullWidthDiv } from '../../common/styles';
import { COLORS } from '../../../const/colors';

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
  max-height: ${props => props.expanded ? "400px" : "136px"};
  transition: max-height  .3s ease-out;
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  line-height: 0.5em;
`;
