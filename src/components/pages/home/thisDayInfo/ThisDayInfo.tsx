import React from 'react';

import s from './ThisDayInfo.module.scss';

import cloud from 'assets/images/cloud.png';
import { ThisDayItem } from 'components/pages/home/thisDayInfo/thisDayItem/ThisDayItem';
import { Weather } from 'store/slices/currentWeatherSlice/types';
import { Item, ReturnComponentType } from 'types';

interface Props {
  weather: Weather;
}

export const ThisDayInfo = ({ weather }: Props): ReturnComponentType => {
  const { wind, main, weather: w } = weather;
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${main.temp}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: main.pressure,
    },
    {
      icon_id: 'precipitation',
      name: 'Atmospheric precipitation',
      value: w[0].description,
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${wind.speed} m/s`,
    },
  ];

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem item={item} key={item.icon_id} />
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </div>
  );
};
