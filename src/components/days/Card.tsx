import React from 'react';

import s from './Days.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { DaysWeather } from 'store/slices/currentWeatherSlice/types';
import { ReturnComponentType } from 'types';

interface Props {
  day: DaysWeather;
}

export const Card = ({ day }: Props): ReturnComponentType => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.dt_txt}</div>
      <div className={s.day_icon}>
        <GlobalSvgSelector id={day.weather[0].description} />
      </div>
      <div className={s.day_temp_day}>{day.main.temp}</div>
      <div className={s.day_temp_night}>{day.main.pressure}</div>
      <div className={s.info}>{day.weather[0].description}</div>
    </div>
  );
};
