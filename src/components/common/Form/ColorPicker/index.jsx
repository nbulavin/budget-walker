import React from 'react';
import COLORS from '../../../../const/colors';
import {
  ErrorsDiv,
  ErrorString,
  InputSectionDiv,
  NameDiv,
  ColorPickerDiv,
  StyledColorPicker,
} from './styles';

function defaultColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  const length = color.length;
  if (length === 3 || length === 6) {
    return `#${color}`;
  }
  const remainingCharsLength = 6 - length;
  if (length > 6) {
    return COLORS.fieldBackground;
  }
  return `#${color}${'0'.repeat(remainingCharsLength)}`;
}

class FormColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '',
    };
  }

  componentDidMount() {
    const { onInputChange } = this.props;
    const color = defaultColor();

    this.setState({ currentColor: color });
    onInputChange(color);
  }

  handleInputChange = (colorOption) => {
    const { onInputChange } = this.props;

    this.setState({ currentColor: colorOption.hex });
    onInputChange(colorOption.hex);
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
            errors?.map((item, index) => (
              <ErrorString key={index}>{item}</ErrorString>
            ))
          }
        </ErrorsDiv>
      </InputSectionDiv>
    );
  }
}

export default FormColorPicker;
