import { Weather } from 'store/slices/currentWeatherSlice/types';
import { RootState } from 'store/store';

export const selectWeather = (state: RootState): Weather => {
  return state.currentWeather.weather;
};
