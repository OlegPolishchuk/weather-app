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
      label: 'Homyel',
      value: 'Homyel',
    },
    {
      label: 'Hrodna',
      value: 'Hrodna',
    },
    {
      label: 'Mogilev',
      value: 'Mogilev',
    },
  ],
  currentCity: { value: '', label: '' },
  isInitialized: false,
  isCityInitialized: false,
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

    setIsInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },

    setIsCityInitialized(state, action: PayloadAction<boolean>) {
      state.isCityInitialized = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
