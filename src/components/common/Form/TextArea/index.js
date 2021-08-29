import React from 'react';
import { ErrorsDiv, ErrorString, InputSectionDiv, NameDiv, StyledTextArea, TextAreaDiv } from './styles';

class FormTextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      filledIn: false
    };
  }

  handleInputChange = (text) => {
    const { onInputChange } = this.props;
    this.setState({ filledIn: text.target.value !== '' });
    onInputChange(text.target.value);
  }

  render() {
    const { name, errors, defaultText } = this.props;

    return (
      <InputSectionDiv>
        <NameDiv>
          {
            this.state.filledIn === true ? name : ''
          }
        </NameDiv>
        <TextAreaDiv>
          <StyledTextArea
            placeholder={name}
            onChange={this.handleInputChange}
            inError={errors.length > 0}
            rows={1}
            max-rows={6}
          />
        </TextAreaDiv>
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
}

export default FormTextArea;
