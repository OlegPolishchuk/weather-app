import { DaysWeatherData } from 'store/slices/currentWeatherSlice/types';
import { RootState } from 'store/store';

export const selectDaysWeatherData = (state: RootState): DaysWeatherData =>
  state.daysWeatherReducer.weatherData;
