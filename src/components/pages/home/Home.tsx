import React from 'react';

import s from './Home.module.scss';

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
    </div>
  );
};
