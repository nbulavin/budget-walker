import styled from 'styled-components';
import { SliderPicker } from 'react-color';
import { COLORS } from '../../../../const/colors';

export const InputSectionDiv = styled.div`

`;

export const NameDiv = styled.div`
  font-size: 12px;
  text-align: left;
  height: 16px;
`;

export const ColorPickerDiv = styled.div`
  margin-top: 5px;
`;

export const StyledColorPicker = styled(SliderPicker)`

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
