import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { COLORS } from '../../../../const/colors';

export const InputSectionDiv = styled.div`

`;

export const NameDiv = styled.div`
  font-size: 12px;
  text-align: left;
  height: 16px;
`;

export const TextAreaDiv = styled.div`
  height: 28px;
`;

export const StyledTextArea = styled(TextareaAutosize)`
  display: block;
  width: calc(100%);
  resize: none;
  text-align: start;
  background-color: inherit;
  border-bottom: 2px solid ${COLORS.borderColor};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 16px;
  padding: 0;
  margin-top: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  
  &:focus-visible {
    outline: 0;
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
