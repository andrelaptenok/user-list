import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { UserItem } from 'components/templates/UserItem/UserItem';
import { deleteUser, setUser } from 'store/user/actions';
import { User } from 'store/user/types';
import { openModal } from 'store/common/actions';

import styles from './UsersList.module.scss';

interface Props {
  users: User[];
  filter: string;
}

export const UsersList: FC<Props> = ({ users, filter }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleOpenModal = (user: User) => {
    dispatch(openModal(true));
    dispatch(setUser(user));
  };

  return (
    <div className={styles.list}>
      <ul>
        {users?.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            filter={filter}
            onDeleteUser={handleDeleteUser}
            onOpenModal={handleOpenModal}
          />
        ))}
      </ul>
    </div>
  );
};
