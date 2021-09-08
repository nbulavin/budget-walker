import React from 'react';
import { ErrorBlock } from './styles';

const Errors = ({ errorsArray }) => (
  <ErrorBlock>
    {errorsArray.join('\n')}
  </ErrorBlock>
);

export default Errors;
