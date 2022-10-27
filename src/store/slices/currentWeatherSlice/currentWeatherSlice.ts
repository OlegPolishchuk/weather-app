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
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    fetchCurrentWeatherSuccess(state, action: PayloadAction<Weather>) {
      state.weather = action.payload;
    },
  },
});

export const currentWeather = currentWeatherSlice.reducer;
