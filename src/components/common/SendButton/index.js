import React from 'react';
import { ThreeDots } from '@agney/react-loading';
import { StyledButton } from './styles';

class SendButton extends React.Component {
  render() {
    const { loading } = this.props;
    const { buttonEnabled } = this.props;

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
