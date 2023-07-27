import { RootState } from 'store/types';

export const selectIsModalOpen = (state: RootState) => state.common.isModalOpen;
export const selectIsLoaded = (state: RootState) => state.common.isLoaded;
