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
    this.setState({ filledIn: text.target.value !== '' });
    this.props.onInputChange(text.target.value);
  }

  render() {
    const { name, errors } = this.props;
    const { filledIn } = this.state;
    return (
      <InputSectionDiv>
        <NameDiv>
          {
            filledIn === true ? name : ''
          }
        </NameDiv>
        <InputDiv>
          <StyledFormInput placeholder={name} onChange={this.handleInputChange} inError={errors.length > 0} />
        </InputDiv>
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

export default FormInput;
