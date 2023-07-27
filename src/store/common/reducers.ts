import { AnyAction } from 'store/types';

export interface CommonState {
  isModalOpen: boolean;
  isLoaded: boolean;
}

const initialState: CommonState = {
  isModalOpen: false,
  isLoaded: false,
};

export const commonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: action.payload,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
