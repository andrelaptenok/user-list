import { RootState } from 'store/types';

export const selectUser = (state: RootState) => state.user.user;
export const selectUserList = (state: RootState) => state.user.users;
export const selectFilteredUsers = (state: RootState) => state.user.filteredUsers;
export const selectFilter = (state: RootState) => state.user.filter;
