import { DaysWeather } from 'store/slices/currentWeatherSlice/types';
import { RootState } from 'store/store';

export const selectTabsWeatherData = (state: RootState): DaysWeather[] =>
  state.daysWeatherReducer.tabsWeatherData;
