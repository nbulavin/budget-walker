import React from 'react';
import {
  ErrorsDiv,
  ErrorString,
  InputSectionDiv,
  NameDiv,
  CurrencyInputDiv,
  StyledCurrencyInput,
} from './styles';

class FormCurrencyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filledIn: false,
    };
  }

  handleInputChange = (text) => {
    const { onInputChange } = this.props;

    this.setState({ filledIn: text != null });
    const currencyInNumber = parseFloat(text) * 100;
    onInputChange(currencyInNumber);
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
        <CurrencyInputDiv>
          <StyledCurrencyInput
            placeholder={name}
            decimalsLimit={2}
            decimalScale={2}
            intlConfig={{ locale: 'ru-RU', currency: 'RUB' }}
            decimalSeparator="."
            groupSeparator=" "
            onValueChange={this.handleInputChange}
            inError={errors.length > 0}
          />
        </CurrencyInputDiv>
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

export default FormCurrencyInput;
