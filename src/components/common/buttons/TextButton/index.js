import React from 'react';
import { StyledTextButton } from './styles';

class TextButton extends React.Component {
  render() {
    return (
      <StyledTextButton onClick={this.props.onClickAction}>
        {this.props.buttonName}
      </StyledTextButton>
    )
  }
}

export default TextButton;
