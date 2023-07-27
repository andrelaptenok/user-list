import { FC } from 'react';
import { Provider } from 'react-redux';

import { UsersPage } from 'pages/UserPage';
import { store } from 'store/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <UsersPage />
    </Provider>
  );
};
