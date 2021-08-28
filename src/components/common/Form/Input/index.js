import React from 'react';
import { ErrorsDiv, ErrorString, StyledFormInput, InputDiv, InputSectionDiv, NameDiv } from './styles';

const FormInput = ({name, defaultText, errors, onInputChange}) => {
  return (
    <InputSectionDiv>
      <NameDiv>
        {name}
      </NameDiv>
      <InputDiv>
        <StyledFormInput placeholder={defaultText} onChange={onInputChange} inError={errors.length > 0}/>
      </InputDiv>
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

export default FormInput;
