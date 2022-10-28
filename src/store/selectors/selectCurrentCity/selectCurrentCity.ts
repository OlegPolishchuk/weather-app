import { City } from 'store/slices/appSlice/types';
import { RootState } from 'store/store';

export const selectCurrentCity = (state: RootState): City => state.appReducer.currentCity;
