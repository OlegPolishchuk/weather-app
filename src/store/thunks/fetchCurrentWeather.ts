import { AxiosError } from 'axios';

import { WeatherAPI } from 'api';
import { currentWeatherSlice } from 'store/slices/currentWeatherSlice/currentWeatherSlice';
import { AppDispatch } from 'store/store';

export const fetchCurrentWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather);
    const res = await WeatherAPI.getCurrentWeather(city);

    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
  } catch (e) {
    const error = e as AxiosError;

    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(error.message));
  }
};
