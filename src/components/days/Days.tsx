import React, { useEffect, useState } from 'react';

import s from './Days.module.scss';

import { Card } from 'components/days/Card';
import { Tabs } from 'components/days/Tabs';
import { DotPreloader } from 'components/preloaders/dotPreloader/DotPreloader';
import { TabsValue } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectAllTabs,
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

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeTab = (tab: TabsValue): void => {
    if (tab === currentTub) return;

    const k = 1000;
    const delay = Math.random() * k;

    setIsLoading(true);

    setTimeout(() => {
      dispatch(daysWeatherSlice.actions.changeCurrentTab(tab));

      setIsLoading(false);
    }, delay);
  };

  const tabs = useAppSelector(selectAllTabs);
  const currentTub = useAppSelector(selectCurrentTub);
  const allWeatherData = useAppSelector(selectDaysWeatherData);
  const days = useAppSelector(selectTabsWeatherData);

  useEffect(() => {
    const dataForTabs = getCardsByTab(currentTub, allWeatherData);

    dispatch(daysWeatherSlice.actions.setTabsWeatherData(dataForTabs));
  }, [currentTub, allWeatherData]);

  return (
    <>
      <Tabs tabs={tabs} callback={handleChangeTab} currentTab={currentTub} />
      <div className={s.days}>
        {isLoading ? (
          <DotPreloader />
        ) : (
          <div className={s.days_wrapper}>
            <div className={s.days_wrapper_inner}>
              {days.map((day: DaysWeather) => (
                <Card day={day} key={day.dt} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
