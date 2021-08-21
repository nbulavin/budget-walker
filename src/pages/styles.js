import styled from 'styled-components';
import { COLORS } from '../const/colors';

const AppDiv = styled.div`
  text-align: center;
  background-color: ${COLORS.appBackground};
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: black;
`;

export default AppDiv;
