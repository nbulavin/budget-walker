import React from 'react';
import { ThreeDots } from '@agney/react-loading';
import { StyledButton } from './styles';

class SendButton extends React.Component {
  render() {
    const loading = this.props.loading;
    const buttonEnabled = this.props.buttonEnabled;

    return (
      <StyledButton onClick={this.props.sendRequest} disabled={!buttonEnabled}>
        { !loading ? (
          this.props.buttonName
        ) : (
          <ThreeDots width="40" />
        ) }
      </StyledButton>
    );
  }
}

export default SendButton;