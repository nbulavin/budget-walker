import React from 'react';
import {
  ErrorsDiv,
  ErrorString,
  InputSectionDiv,
  NameDiv,
  SelectDiv,
  StyledSelect,
  reactSelectStyles,
} from './styles';

const defaultValue = {
  value: null,
  label: 'Тип',
};
const selectOptions = [
  { value: 'credit_card', label: 'Карта' },
  { value: 'account', label: 'Лицевой счет' },
  { value: 'cash', label: 'Наличные' },
];

class FormSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filledIn: false,
    };
  }

  handleInputChange = (selectedOption) => {
    this.setState({ filledIn: true });
    this.props.onInputChange(selectedOption.value);
  }

  render() {
    const { name, errors } = this.props;

    return (
      <InputSectionDiv>
        <NameDiv>
          {
            this.state.filledIn === true ? name : ''
          }
        </NameDiv>
        <SelectDiv>
          <StyledSelect
            className="basic-single"
            classNamePrefix="select"
            styles={reactSelectStyles}
            defaultValue={defaultValue}
            onChange={this.handleInputChange}
            options={selectOptions}
            isClearable={false}
            isSearchable={false}
          />
        </SelectDiv>
        <ErrorsDiv>
          {
            errors.map((item) => (
              <ErrorString>{item}</ErrorString>
            ))
          }
        </ErrorsDiv>
      </InputSectionDiv>
    );
  }
}

export default FormSelect;
