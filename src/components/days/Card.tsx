import React from 'react';

import s from './Days.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { Day, ReturnComponentType } from 'types';

interface Props {
  day: Day;
}

export const Card = ({ day }: Props): ReturnComponentType => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day_info}>{day.info}</div>
      <div className={s.day_icon}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.day_temp_day}>{day.temp_day}</div>
      <div className={s.day_temp_night}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
