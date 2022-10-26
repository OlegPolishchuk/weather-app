import React from 'react';

import s from './ThisDay.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { Weather } from 'store/slices/currentWeatherSlice/types';
import { ReturnComponentType } from 'types';
import { roundValue } from 'utils/roundValue';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props): ReturnComponentType => {
  const temp = roundValue(weather.main.temp);
  const weatherDescription = weather.weather[0];

  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{temp}&deg;</div>
          <div className={s.this_day_name}>Today</div>
        </div>
        <div title={weatherDescription.description}>
          <GlobalSvgSelector id={weatherDescription.description} />
        </div>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          time: <span>21:54</span>
        </div>
        <div className={s.this_city}>{weather.name}</div>
      </div>
    </div>
  );
};
