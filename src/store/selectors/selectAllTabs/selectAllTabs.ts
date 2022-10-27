import { TabsValue } from 'enums';
import { RootState } from 'store/store';

export const selectAllTabs = (state: RootState): TabsValue[] =>
  state.daysWeatherReducer.tabs;
