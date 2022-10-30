import { DefaultCity } from 'globalConstants';
import { storage } from 'model/storage';
import { appSlice } from 'store/slices/appSlice/appSlice';
import { AppDispatch } from 'store/store';

export const initializeCities = () => (dispatch: AppDispatch) => {
  const city = storage.getItem('currentCity') || DefaultCity;

  dispatch(appSlice.actions.setCurrentCity(city));
  dispatch(appSlice.actions.setIsCityInitialized(true));
};
