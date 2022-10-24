import React from 'react';

import s from './Popup.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { ThisDayItem } from 'components/pages/home/thisDayInfo/thisDayItem/ThisDayItem';
import { Item, ReturnComponentType } from 'types';

export const Popup = (): ReturnComponentType => {
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
    <>
      <div className={s.blur} />
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20`</div>
          <div className={s.day_title}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day_time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day_city}>Санкт Петербург</div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem item={item} key={item.icon_id} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
