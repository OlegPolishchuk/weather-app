import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentWeather, Weather } from 'store/slices/currentWeatherSlice/types';

const initialState: CurrentWeather = {
  weather: {} as Weather,
  isLoading: false,
  error: '',
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<Weather>) {
      state.weather = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    fetchCurrentWeatherError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
