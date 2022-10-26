import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentWeather, Weather } from 'store/slices/currentWeatherSlice/types';

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      humidity: 0,
      pressure: 0,
    },
    weather: [{ id: 0, main: '', description: '', icon: '' }],
    name: '',
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  },
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

export const currentWeather = currentWeatherSlice.reducer;
