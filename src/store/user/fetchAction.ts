import { Dispatch } from 'redux';

export const fetchUsers = (): unknown => async (dispatch: Dispatch) => {
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
