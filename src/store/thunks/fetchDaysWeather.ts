import { AxiosError } from 'axios';

import { WeatherAPI } from 'api';
import { appSlice } from 'store/slices/appSlice/appSlice';
import { daysWeatherSlice } from 'store/slices/daysWeatherSlice/daysWeatherSlice';
import { AppDispatch } from 'store/store';
import { breakArrayIntoGroups } from 'utils/breakArrayIntoGroups';

export const fetchDaysWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(appSlice.actions.setIsLoading(true));

    const res = await WeatherAPI.getDaysWeather(city);
    const data = breakArrayIntoGroups(res);

    dispatch(daysWeatherSlice.actions.setWeatherData(data));
    dispatch(appSlice.actions.setIsLoading(false));
  } catch (e) {
    const error = e as AxiosError;

    dispatch(appSlice.actions.setError(error.message));
    dispatch(appSlice.actions.setIsLoading(false));
  }
};
