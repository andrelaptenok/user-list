import { AnyAction } from 'store/types';

import { User } from './types';

export interface UserState {
  users: User[];
  user: User;
  deletedUser: number[];
  filteredUsers: User[];
  filter: string;
}

const initialState: UserState = {
  users: [],
  user: null,
  deletedUser: [],
  filteredUsers: [],
  filter: '',
};

export const usersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
      };

    case 'DELETE_USER':
      const deletedUserId = action.payload;
      const updatedFilteredUsers = state.filteredUsers.filter((user) => user.id !== deletedUserId);

      return {
        ...state,
        filteredUsers: updatedFilteredUsers,
        deletedUser: [...state.deletedUser, deletedUserId],
      };

    case 'SET_FILTER': {
      const filter: string = action.payload;
      const filterUser = state.users.filter(({ id }) => !state.deletedUser.includes(id));
      const filteredUsers = filterUser.filter(
        (user) =>
          user.name.toLowerCase().includes(filter.toLowerCase()) ||
          user.username.toLowerCase().includes(filter.toLowerCase()) ||
          user.email.toLowerCase().includes(filter.toLowerCase()),
      );
      return {
        ...state,
        filter,
        filteredUsers,
      };
    }

    case 'RESET_FILTER':
      return {
        ...state,
        filter: '',
        users: state.users,
        deletedUser:[],
        filteredUsers: state.users,
      };

    default:
      return state;
  }
};
