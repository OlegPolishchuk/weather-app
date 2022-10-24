import React from 'react';

import s from './ThisDay.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { ReturnComponentType } from 'types';

export const ThisDay = (): ReturnComponentType => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>20</div>
          <div className={s.this_day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          time: <span>21:54</span>
        </div>
        <div className={s.this_city}>Санкт Перербург</div>
      </div>
    </div>
  );
};
