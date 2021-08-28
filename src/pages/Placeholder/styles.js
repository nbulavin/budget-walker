import styled, { keyframes } from 'styled-components';

export const AppDiv = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
`;

export const AppLink = styled.a`
  color: #18333c;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RotatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;
