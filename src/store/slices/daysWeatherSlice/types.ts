import { TabsValue } from 'enums';
import { DaysWeather, DaysWeatherData } from 'store/slices/currentWeatherSlice/types';

export interface DaysWeatherState {
  tabs: TabsValue[];
  currentTub: TabsValue;
  weatherData: DaysWeatherData;
  tabsWeatherData: DaysWeather[];
}
