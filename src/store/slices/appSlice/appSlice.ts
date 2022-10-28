import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppInitialState, City } from 'store/slices/appSlice/types';

const initialState: AppInitialState = {
  isLoading: false,
  error: '',
  cities: [
    {
      value: 'Minsk',
      label: 'Minsk',
    },
    {
      label: 'Brest',
      value: 'Brest',
    },
    {
      label: 'Vitebsk',
      value: 'Vitebsk',
    },
    {
      label: 'Gomel',
      value: 'Gomel',
    },
    {
      label: 'Grodno',
      value: 'Grodno',
    },
    {
      label: 'Mogilev',
      value: 'Mogilev',
    },
  ],
  currentCity: { value: 'Minsk', label: 'Minsk' },
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

    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
