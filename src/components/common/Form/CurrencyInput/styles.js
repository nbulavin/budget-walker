import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';
import { COLORS } from '../../../../const/colors';

export const InputSectionDiv = styled.div`

`;

export const NameDiv = styled.div`
  font-size: 12px;
  text-align: left;
  height: 16px;
`;

export const CurrencyInputDiv = styled.div`
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  font-size: 16px;
  width: calc(100%);
  padding: 0;
  border-bottom: 2px solid ${props => props.inError ? COLORS.errorText : COLORS.borderColor};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: #1E2022;
  height: 26px;
  background-color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;

  &:focus-visible {
    outline: none !important;
  }
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLORS.placeholderText};
  }
`;

export const ErrorsDiv = styled.div`
  font-size: 10px;
  color: ${COLORS.errorText};
  text-align: left;
  min-height: 13px;
`;

export const ErrorString = styled.div`
  margin: 0
`;
