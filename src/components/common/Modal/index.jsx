import React from 'react';
import { ModalBackgroundDiv, ModalContentDiv } from './styles';

const Modal = ({ active, closeModal, children }) => (
  <ModalBackgroundDiv active={active} onClick={() => closeModal()}>
    <ModalContentDiv onClick={(e) => e.stopPropagation()}>
      {children}
    </ModalContentDiv>
  </ModalBackgroundDiv>
);

export default Modal;
