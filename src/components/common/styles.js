import styled from 'styled-components';
import COLORS from '../../const/colors';

const backgroundColor = COLORS.blockBackground;

export const BackgroundDiv = styled.div`
  width: 1200px;
`;

export const BlockDiv = styled.div`
  position: relative;
  margin: 10px auto;
  background-color: ${backgroundColor};
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 2px 2px 9px rgb(0 0 0 / 13%);
`;

export const FullWidthDiv = styled(BlockDiv)`
  width: 100%;
`;
