import { FC } from 'react';

import { UserDetails } from 'components/templates/UserDetails/UserDetails';
import { Modal } from 'components/ui/Modal/Modal';
import { Button } from 'components/ui/Button/Button';
import { templateUserDetails } from 'helpers/templateUserDetails';
import { User } from 'store/user/types';

import styles from './UserModal.module.scss';

interface Props {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal: FC<Props> = ({ user, isOpen, onClose }) => {
  if (user === null) return null;
  const userDetails = templateUserDetails(user);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.popup}>
        <UserDetails title="Address" userDetails={userDetails?.address} />
        <UserDetails title="Company" userDetails={userDetails?.company} />
        <Button size="medium" color="white" border="grey" width="80px" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};
