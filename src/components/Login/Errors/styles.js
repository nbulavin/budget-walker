import styled from 'styled-components';
import COLORS from '../../../const/colors';

export const ErrorBlock = styled.p`
  min-height: 20px;
  font-size: 14px;
  margin: 5px 0;
`;

export const ErrorString = styled.div`
  margin: 0;
  color: ${COLORS.errorText};
`;
