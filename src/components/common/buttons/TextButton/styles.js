import styled from 'styled-components';
import COLORS from '../../../../const/colors';

export const StyledTextButton = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.title};
  
  &:hover {
    text-decoration: underline;
  }
`;
