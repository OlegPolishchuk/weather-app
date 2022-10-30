import React, { useEffect } from 'react';

import s from './Home.module.scss';

import { Days } from 'components/days/Days';
import { ThisDay } from 'components/pages/home/thisDay/ThisDay';
import { ThisDayInfo } from 'components/pages/home/thisDayInfo/ThisDayInfo';
import { RoundPreloader } from 'components/preloaders/roundPreloader/RoundPreloader';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectCurrentCity, selectIsInitialized, selectWeather } from 'store/selectors';
import { fetchCurrentWeather } from 'store/thunks/fetchCurrentWeather';
import { fetchDaysWeather } from 'store/thunks/fetchDaysWeather';
import { ReturnComponentType } from 'types';

export const Home = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);
  const weather = useAppSelector(selectWeather);
  const currentCity = useAppSelector(selectCurrentCity);
  const isCityInit = useAppSelector(state => state.appReducer.isCityInitialized);

  useEffect(() => {
    if (isCityInit) {
      dispatch(fetchCurrentWeather(currentCity.value));
      dispatch(fetchDaysWeather(currentCity.value));
    }
  }, [currentCity, isCityInit]);

  return (
    <div className={s.home}>
      {isInitialized ? (
        <>
          <div className={s.wrapper}>
            <ThisDay weather={weather} />
            <ThisDayInfo weather={weather} />
          </div>

          <Days />
        </>
      ) : (
        <RoundPreloader />
      )}
    </div>
  );
};
