import React from 'react';
import {
  ErrorsDiv,
  ErrorString,
  InputSectionDiv,
  NameDiv,
  ColorPickerDiv,
  StyledColorPicker
} from './styles';

class FormColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      filledIn: false,
      currentColor: ''
    };
  }

  componentDidMount() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    this.setState({ currentColor: color });
    this.props.onInputChange(color);
  }

  handleInputChange = (colorOption) => {
    console.log(colorOption);
    console.log(colorOption.hex);
    this.setState({ currentColor: colorOption.hex });
    this.props.onInputChange(colorOption.hex);
  }

  render() {
    const { name, errors } = this.props;
    const { currentColor } = this.state;

    return (
      <InputSectionDiv>
        <NameDiv>
          {
            name
          }
        </NameDiv>
        <ColorPickerDiv>
          <StyledColorPicker
            color={currentColor}
            onChangeComplete={this.handleInputChange}
          />
        </ColorPickerDiv>
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

export default FormColorPicker;
