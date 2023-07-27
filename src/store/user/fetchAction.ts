import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from 'store/types';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const fetchUsers = (): AppThunk<void> => async (dispatch) => {
  dispatch({ type: 'SET_LOADED', payload: true });
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    const users = await response.json();
    dispatch({ type: 'SET_USERS', payload: users });
    dispatch({ type: 'SET_LOADED', payload: false });
  } catch (error) {
    dispatch({ type: 'SET_LOADED', payload: false });
  }
};
