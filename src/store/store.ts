import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/slices/appSlice/appSlice';
import { currentWeather } from 'store/slices/currentWeatherSlice/currentWeatherSlice';
import { daysWeatherReducer } from 'store/slices/daysWeatherSlice/daysWeatherSlice';

const rootReducer = combineReducers({
  appReducer,
  currentWeather,
  daysWeatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
