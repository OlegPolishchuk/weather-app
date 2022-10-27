import { TabsValue } from 'enums';
import { RootState } from 'store/store';

export const selectCurrentTub = (state: RootState): TabsValue =>
  state.daysWeatherReducer.currentTub;
