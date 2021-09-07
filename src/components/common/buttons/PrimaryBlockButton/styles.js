import styled from 'styled-components';
import COLORS from '../../../../const/colors';

export const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${COLORS.primaryButtonBackground};
  color: ${COLORS.primaryButtonText};
  padding: 8px 15px;
  font-weight: 600;
  font-size: 14px;
  border-width: 0;
  cursor: pointer;
  min-width: 80px;
  min-height: 35px;
  
  &:disabled {
    background-color: ${COLORS.primaryButtonBackgroundDisabled};
  }

  ${(props) => props.disabled === false && `
    &:hover {
      background-color: ${COLORS.primaryButtonBackgroundHover};
    }
  `}
`;
