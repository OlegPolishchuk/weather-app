import React from 'react';

import s from './ThisDayInfo.module.scss';

import cloud from 'assets/images/cloud.png';
import { ThisDayItem } from 'components/pages/home/thisDayInfo/thisDayItem/ThisDayItem';
import { Item, ReturnComponentType } from 'types';

export const ThisDayInfo = (): ReturnComponentType => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20`',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765мм ртутного столба',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/c юго-запад - легкий ветер',
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
