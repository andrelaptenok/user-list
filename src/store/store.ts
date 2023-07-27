import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { usersReducer } from 'store/user/reducers';
import { commonReducer } from 'store/common/reducers';

const rootReducer = combineReducers({
  user: usersReducer,
  common: commonReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
