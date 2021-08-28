import styled from 'styled-components';
import { COLORS } from '../../../../const/colors';

export const InputSectionDiv = styled.div`

`;

export const NameDiv = styled.div`
  font-size: 18px;
  text-align: left;
`;

export const InputDiv = styled.div`

`;

export const StyledFormInput = styled.input`
  font-size: 16px;
  width: calc(100% - 24px);
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid  ${props => props.inError ? COLORS.errorText : COLORS.borderColor};
  color: ${COLORS.text};
  height: 26px;

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

