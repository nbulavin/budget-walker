import React from 'react';
import { StyledTextButton } from './styles';

const TextButton = ({ buttonName, onClickAction }) => (
  <StyledTextButton onClick={onClickAction}>
    {buttonName}
  </StyledTextButton>
);

export default TextButton;
