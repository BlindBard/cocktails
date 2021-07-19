import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import { useModalPortalContext } from '../context';

const Modal = ({ isOpen, onClose, children }) => {
  const portal = useModalPortalContext();

  useEffect(() => {
    const removeClass = () => document.body.classList.remove('no-scroll');
    if (isOpen) document.body.classList.add('no-scroll');
    else removeClass();

    return removeClass;
  }, [isOpen]);

  if (!isOpen) return null;
  const content = (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
      <button className={styles.closeBtn} onClick={onClose}>
        x
      </button>
    </div>
  );
  return ReactDOM.createPortal(content, portal);
};

export default Modal;
