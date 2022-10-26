import React, { useEffect } from 'react';

import s from './Home.module.scss';

import { Days } from 'components/days/Days';
import { ThisDay } from 'components/pages/home/thisDay/ThisDay';
import { ThisDayInfo } from 'components/pages/home/thisDayInfo/ThisDayInfo';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectWeather } from 'store/selectors';
import { fetchCurrentWeather } from 'store/thunks/fetchCurrentWeather';
import { ReturnComponentType } from 'types';

export const Home = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const weather = useAppSelector(selectWeather);

  useEffect(() => {
    dispatch(fetchCurrentWeather('Minsk'));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>

      <Days />
    </div>
  );
};
