import { RootState } from 'store/store';

export const selectIsInitialized = (state: RootState): boolean =>
  state.appReducer.isInitialized;
