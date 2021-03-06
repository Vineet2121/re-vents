import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../features/sandbox/TestModal';
import LoginForm from '../../../features/auth/LoginForm';

const ModalManager = () => {
  const modalLookup = { TestModal, LoginForm };

  const currentModal = useSelector((state) => state.modal);

  let renderedModal;
  if (currentModal) {
    console.log(currentModal);
    const { modalType, modalProps } = currentModal;
    console.log(modalType, modalProps);
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
