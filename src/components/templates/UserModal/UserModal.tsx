import { FC } from 'react';

import { UserDetails } from 'components/templates/UserDetails/UserDetails';
import { Modal } from 'components/ui/Modal/Modal';
import { templateUserDetails } from 'helpers/templateUserDetails';
import { User } from 'store/user/types';

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
      <UserDetails title="Address" userDetails={userDetails?.address} />
      <UserDetails title="Company" userDetails={userDetails?.company} />
    </Modal>
  );
};
