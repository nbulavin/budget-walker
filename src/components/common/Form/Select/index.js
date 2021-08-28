import React from 'react';

import { ErrorsDiv, ErrorString, InputSectionDiv, NameDiv, SelectDiv, StyledSelect, reactSelectStyles } from './styles';

const selectOptions = [
  { value: 'credit_card', label: 'Карта' },
  { value: 'account', label: 'Лицевой счет' },
  { value: 'cash', label: 'Наличные' },
];

const FormSelect = ({name, defaultText, errors, onInputChange}) => {
  return (
    <InputSectionDiv>
      <NameDiv>
        {name}
      </NameDiv>
      <SelectDiv>
        <StyledSelect
          className="basic-single"
          classNamePrefix="select"
          styles={reactSelectStyles}
          defaultValue={selectOptions[0]}
          onChange={onInputChange}
          options={selectOptions}
          isClearable={false}
          isSearchable={false}
        />

        {/*<FormInput placeholder={defaultText} onChange={onInputChange} inError={errors.length > 0}/>*/}
      </SelectDiv>
      <ErrorsDiv>
        {
          errors.map((item) => (
            <ErrorString>{item}</ErrorString>
          ))
        }
      </ErrorsDiv>
    </InputSectionDiv>
  )
}

export default FormSelect;
