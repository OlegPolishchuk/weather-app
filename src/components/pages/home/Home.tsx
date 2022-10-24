import React from 'react';

import s from './Home.module.scss';

import { Days } from 'components/days/Days';
import { ThisDay } from 'components/pages/home/thisDay/ThisDay';
import { ThisDayInfo } from 'components/pages/home/thisDayInfo/ThisDayInfo';
import { ReturnComponentType } from 'types';

export const Home = (): ReturnComponentType => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>

      <Days />
    </div>
  );
};
