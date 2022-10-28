import React, { useEffect } from 'react';

import s from './Home.module.scss';

import { Days } from 'components/days/Days';
import { ThisDay } from 'components/pages/home/thisDay/ThisDay';
import { ThisDayInfo } from 'components/pages/home/thisDayInfo/ThisDayInfo';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectCurrentCity, selectWeather } from 'store/selectors';
import { fetchCurrentWeather } from 'store/thunks/fetchCurrentWeather';
import { fetchDaysWeather } from 'store/thunks/fetchDaysWeather';
import { ReturnComponentType } from 'types';

export const Home = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const weather = useAppSelector(selectWeather);
  const currentCity = useAppSelector(selectCurrentCity);

  useEffect(() => {
    dispatch(fetchCurrentWeather(currentCity.value));
    dispatch(fetchDaysWeather(currentCity.value));
  }, [currentCity]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>

      <Days />
    </div>
  );
};
