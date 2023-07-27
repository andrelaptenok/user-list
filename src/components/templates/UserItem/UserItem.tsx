import React from 'react';

import { Button } from 'components/ui/Button/Button';
import { highlightMatch } from 'helpers/highlightMatch';
import { User } from 'store/user/types';

import styles from './UserItem.module.scss';

interface UserListItemProps {
  user: User;
  filter: string;
  onDeleteUser: (id: number) => void;
  onOpenModal: (user: User) => void;
}

export const UserItem: React.FC<UserListItemProps> = ({ user, onDeleteUser, onOpenModal, filter = '' }) => {
  const handleDeleteUser = () => {
    onDeleteUser(user.id);
  };

  const handleOpenModal = () => {
    onOpenModal(user);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__item} onClick={handleOpenModal}>
        <h3 dangerouslySetInnerHTML={{ __html: highlightMatch(user.name, filter) }} />
        <p
          dangerouslySetInnerHTML={{ __html: highlightMatch(user.username, filter) }}
          className={styles.card__item__username}
        />
        <p dangerouslySetInnerHTML={{ __html: highlightMatch(user.email, filter) }} />
      </div>
      <Button
        size="small"
        color="white"
        border="grey"
        width="70px"
        onClick={handleDeleteUser}
        className={styles.card__button}
      >
        Delete
      </Button>
    </div>
  );
};
