import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Icon } from 'components/ui/Icon/Icon';
import { useEscapeKey } from 'hooks/useEscapeKey';

import styles from './Modal.module.scss';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  useEscapeKey(onClose);

  if (isOpen) {
    return createPortal(
      <div className={styles.modal__overlay}>
        <div className={styles.modal}>
          <Icon name="close" cursor="pointer" onClick={onClose} className={styles.modal__button} />
          {children}
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }

  return null;
};
