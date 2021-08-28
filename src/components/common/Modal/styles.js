import styled from 'styled-components';

export const ModalBackgroundDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${props => props.active ? "1" : "0"};
  pointer-events: ${props => props.active ? "all" : "none"};
  z-index: 9999;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContentDiv = styled.div`

`;