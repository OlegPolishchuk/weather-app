import { City } from 'store/slices/appSlice/types';
import { RootState } from 'store/store';

export const selectCities = (state: RootState): City[] => state.appReducer.cities;
