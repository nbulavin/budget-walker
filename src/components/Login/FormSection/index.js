import React from 'react';
import { FormDiv, FormInput } from './styles'

class FormSection extends React.Component {
  render() {
    return (
      <FormDiv>
        <div>
          <FormInput type="text" placeholder={"Email"}/>
        </div>
        <div>
          <FormInput type="text" placeholder={"Password"}/>
        </div>
      </FormDiv>
    );
  }
}

export default FormSection;
