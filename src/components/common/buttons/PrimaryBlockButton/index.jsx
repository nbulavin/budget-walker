import React from 'react';
import { ThreeDots } from '@agney/react-loading';
import { StyledButton } from './styles';

function PrimaryBlockButton({ loading, buttonEnabled, buttonName, sendRequest }) {
  return (
    <StyledButton onClick={sendRequest} disabled={!buttonEnabled}>
      { !loading ? (
        buttonName
      ) : (
        <ThreeDots width="40" />
      ) }
    </StyledButton>
  );
}

export default PrimaryBlockButton;
