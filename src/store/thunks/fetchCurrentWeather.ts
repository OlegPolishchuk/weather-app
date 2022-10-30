import { AxiosError } from 'axios';

import { WeatherAPI } from 'api';
import { appSlice } from 'store/slices/appSlice/appSlice';
import { currentWeatherSlice } from 'store/slices/currentWeatherSlice/currentWeatherSlice';
import { AppDispatch } from 'store/store';

export const fetchCurrentWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(appSlice.actions.setIsLoading(true));
    const res = await WeatherAPI.getCurrentWeather(city);

    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
    dispatch(appSlice.actions.setIsInitialized(true));
  } catch (e) {
    const error = e as AxiosError;

    dispatch(appSlice.actions.setError(error.message));
    dispatch(appSlice.actions.setIsLoading(false));
  }
};
