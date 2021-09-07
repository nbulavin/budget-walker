import React from 'react';
import {
  ErrorsDiv,
  ErrorString,
  InputSectionDiv,
  NameDiv,
  StyledTextArea,
  TextAreaDiv,
} from './styles';
import { COLORS } from '../../../../const/colors';

class FormTextArea extends React.Component {
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
            minRows={1}
            maxRows={3}
            style={{ borderColor: errors.length > 0 ? COLORS.errorText : COLORS.borderColor }}
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
    );
  }
}

export default FormTextArea;
