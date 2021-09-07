import styled from 'styled-components';
import ReactSelect from 'react-select';
import { COLORS } from '../../../../const/colors';

export const InputSectionDiv = styled.div`

`;

export const NameDiv = styled.div`
  font-size: 12px;
  text-align: left;
  height: 16px;
`;

export const SelectDiv = styled.div`

`;

export const StyledSelect = styled(ReactSelect)`
`;

export const reactSelectStyles = {
  menu: (provided, state) => ({
    ...provided,
    background: COLORS.fieldBackground,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: 22,
  }),
  control: (provided, state) => ({
    ...provided,
    color: COLORS.fieldBackground,
    background: COLORS.fieldBackground,
    borderRadius: 5,
    borderWidth: 2,
    boxShadow: 0,
    borderColor: COLORS.borderColor,
  }),
  option: (provided, state) => ({
    ...provided,
    color: COLORS.text,
    opacity: state.isSelected ? 0.5 : 1,
    padding: 5,
    paddingLeft: 10,
    background: state.isFocused ? COLORS.fieldBackgroundSelected : COLORS.fieldBackground,
    fontSize: 16,
    textAlign: 'left',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: 1,
    color: COLORS.text,
    fontSize: 16,
  }),
};

export const ErrorsDiv = styled.div`
  font-size: 10px;
  color: ${COLORS.errorText};
  text-align: left;
  min-height: 13px;
`;

export const ErrorString = styled.div`
  margin: 0
`;
