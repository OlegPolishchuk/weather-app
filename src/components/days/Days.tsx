import React, { useEffect } from 'react';

import s from './Days.module.scss';

import { Card } from 'components/days/Card';
import { Tabs } from 'components/days/Tabs';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectCurrentTub,
  selectDaysWeatherData,
  selectTabsWeatherData,
} from 'store/selectors';
import { DaysWeather } from 'store/slices/currentWeatherSlice/types';
import { daysWeatherSlice } from 'store/slices/daysWeatherSlice/daysWeatherSlice';
import { ReturnComponentType } from 'types';
import { getCardsByTab } from 'utils/getCardsByTab';

export const Days = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const currentTub = useAppSelector(selectCurrentTub);
  const allWeatherData = useAppSelector(selectDaysWeatherData);
  const days = useAppSelector(selectTabsWeatherData);

  useEffect(() => {
    const dataForTabs = getCardsByTab(currentTub, allWeatherData);

    dispatch(daysWeatherSlice.actions.setTabsWeatherData(dataForTabs));
  }, [currentTub, allWeatherData]);

  return (
    <>
      <Tabs />
      <div className={s.days}>
        <div className={s.days_wrapper}>
          <div className={s.days_wrapper_inner}>
            {days.map((day: DaysWeather) => (
              <Card day={day} key={day.dt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
