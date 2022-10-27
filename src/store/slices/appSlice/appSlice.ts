import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppInitialState } from 'store/slices/appSlice/types';

const initialState: AppInitialState = {
  isLoading: false,
  error: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
