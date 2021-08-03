import React from 'react';
import { ErrorBlock } from "./styles";

class Errors extends React.Component {
  render() {
    const errorsArray = this.props.errorsArray;

    return (
      <ErrorBlock>
        {errorsArray.join('\n')}
      </ErrorBlock>
    )
  }
}

export default Errors;