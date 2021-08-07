import React from 'react';
import { StyledHeader } from './styles';

class BackgroundTitle extends React.Component {
  render() {
    return (
      <StyledHeader>
        {this.props.text}
      </StyledHeader>
    );
  }
}

export default BackgroundTitle;
