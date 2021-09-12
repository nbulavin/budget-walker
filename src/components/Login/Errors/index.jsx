import React from 'react';
import { ErrorString, ErrorBlock } from './styles';

const Errors = ({ errorsArray }) => (
  <ErrorBlock>
    {
      errorsArray?.map((item, index) => (
        <ErrorString key={index}>{item}</ErrorString>
      ))
    }
  </ErrorBlock>
);

export default Errors;
