import React from 'react';

import s from './Days.module.scss';

import { Card } from 'components/days/Card';
import { Tabs } from 'components/days/Tabs';
import { Day, ReturnComponentType } from 'types';

export const Days = (): ReturnComponentType => {
  const days: Day[] = [
    {
      day: 'Сегодня',
      day_info: '24 октября',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      day_info: '25 октября',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшоай дождь',
    },
    {
      day: 'Ср',
      day_info: '26 октября',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '27 октября',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '24 октября',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.icon_id} />
        ))}
      </div>
    </>
  );
};
