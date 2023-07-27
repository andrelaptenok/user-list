import { User } from './types';

export const setUser = (items: User) => ({
  type: 'SET_USER',
  payload: items,
});

export const deleteUser = (id: number) => {
  return {
    type: 'DELETE_USER',
    payload: id,
  };
};

export const setFilter = (filter: string, users: User[]) => {
  return {
    type: 'SET_FILTER',
    payload: filter,
    users,
  };
};

export const resetFilter = (users: User[]) => {
  return {
    type: 'RESET_FILTER',
    users,
  };
};
