import React from 'react';
import { StyledButton } from './styles';
import ReactLoading from 'react-loading';

class SendButton extends React.Component {
  render() {
    const buttonIdle = this.props.buttonIdle;
    const buttonEnabled = this.props.buttonEnabled;

    return (
      <StyledButton onClick={this.props.sendRequest} disabled={!buttonEnabled}>
        { buttonIdle ? (
          this.props.buttonName
        ) : (
          <ReactLoading type="cylon" color="black" />
        ) }
        {/*{this.props.buttonName}*/}
      </StyledButton>
    );
  }
}

export default SendButton;