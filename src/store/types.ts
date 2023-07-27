import { DeleteUserAction, ResetFilterAction, SetFilterAction, SetUserAction, SetUsersAction } from 'store/user/types';
import { OpenModalAction, SetLoadedAction } from 'store/common/types';
import { UserState } from 'store/user/reducers';
import { CommonState } from 'store/common/reducers';

export type RootState = { user: UserState; common: CommonState };

export type AnyAction =
  | SetUserAction
  | SetLoadedAction
  | SetUsersAction
  | SetFilterAction
  | ResetFilterAction
  | DeleteUserAction
  | OpenModalAction;
