import React from 'react';
import {
  ErrorsDiv,
  ErrorString,
  StyledFormInput,
  InputDiv,
  InputSectionDiv,
  NameDiv,
} from './styles';

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filledIn: false,
    };
  }

  handleInputChange = (text) => {
    const { onInputChange } = this.props;

    this.setState({ filledIn: text.target.value !== '' });
    onInputChange(text.target.value);
  }

  render() {
    const { name, errors, predefinedType } = this.props;
    const { filledIn } = this.state;
    return (
      <InputSectionDiv>
        <NameDiv>
          {
            filledIn === true ? name : ''
          }
        </NameDiv>
        <InputDiv>
          <StyledFormInput
            placeholder={name}
            type={predefinedType ?? 'text'}
            onChange={this.handleInputChange}
            inError={errors?.length > 0}
          />
        </InputDiv>
        <ErrorsDiv>
          {
            errors?.map((item, index) => (
              <ErrorString key={index}>{item}</ErrorString>
            ))
          }
        </ErrorsDiv>
      </InputSectionDiv>
    );
  }
}

export default FormInput;
