import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TabsValue } from 'enums';
import { DaysWeather, DaysWeatherData } from 'store/slices/currentWeatherSlice/types';
import { DaysWeatherState } from 'store/slices/daysWeatherSlice/types';

const initialState: DaysWeatherState = {
  currentTub: TabsValue.ThreeDays,
  tabs: [TabsValue.ThreeDays, TabsValue.FiveDays],
  weatherData: {},
  tabsWeatherData: [],
};

export const daysWeatherSlice = createSlice({
  name: 'daysWeather',
  initialState,
  reducers: {
    setWeatherData(state, action: PayloadAction<DaysWeatherData>) {
      state.weatherData = action.payload;
    },

    setTabsWeatherData(state, action: PayloadAction<DaysWeather[]>) {
      state.tabsWeatherData = action.payload;
    },

    changeCurrentTab(state, action: PayloadAction<TabsValue>) {
      state.currentTub = action.payload;
    },
  },
});

export const daysWeatherReducer = daysWeatherSlice.reducer;
