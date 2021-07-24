import React from 'react';
import { StyledButton } from './styles';


class SendButton extends React.Component {
  render() {
    return (
      <StyledButton onClick={this.props.sendRequest}>
        {this.props.buttonName}
      </StyledButton>
    );
  }
}

export default SendButton;