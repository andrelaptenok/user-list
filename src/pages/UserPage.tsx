import { ChangeEvent, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import { UsersList } from 'components/templates/UsersList/UsersList';
import { HeaderMain } from 'components/templates/HeaderMain/HeaderMain';
import { UserModal } from 'components/templates/UserModal/UserModal';
import { NotFoundSearch } from 'components/templates/NotFoundSearch/NotFoundSearch';
import { Content, Header, Layout } from 'components/templates/Layout/Layout';
import { Loader } from 'components/ui/Loader/Loader';
import { selectFilter, selectFilteredUsers, selectUser, selectUserList } from 'store/user/selectors';
import { selectIsLoaded, selectIsModalOpen } from 'store/common/selectors';
import { resetFilter, setFilter } from 'store/user/actions';
import { openModal } from 'store/common/actions';
import { fetchUsers } from 'store/user/fetchAction';

export const UsersPage: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userList = useSelector(selectUserList);
  const filteredUsers = useSelector(selectFilteredUsers);
  const filter = useSelector(selectFilter);
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLoaded = useSelector(selectIsLoaded);

  useEffect(() => {
    dispatch(fetchUsers() as AnyAction);
  }, [dispatch]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue, userList));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter(userList));
  };

  const handleCloseModal = () => {
    dispatch(openModal(false));
  };

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Layout isModalOpen={isModalOpen}>
        <Header>
          <HeaderMain value={filter} handleFilterChange={handleFilterChange} handleResetFilter={handleResetFilter} />
        </Header>
        <Content>
          {filteredUsers?.length > 0 ? <UsersList users={filteredUsers} filter={filter} /> : <NotFoundSearch />}
        </Content>
      </Layout>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} user={user} />
    </>
  );
};
