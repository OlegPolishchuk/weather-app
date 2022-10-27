import React from 'react';

import s from './Days.module.scss';

import { TabsValue } from 'enums';
import { ReturnComponentType } from 'types';

interface Props {
  currentTab: TabsValue;
  tabs: TabsValue[];
  callback: (tab: TabsValue) => void;
}

export const Tabs = ({ tabs, currentTab, callback }: Props): ReturnComponentType => {
  const handleChangeTab = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: TabsValue,
  ): void => {
    e.preventDefault();
    callback(tab);
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map(tab => {
          return (
            <a
              href="/"
              className={`${s.tab} ${tab === currentTab ? s.active : ''}`}
              key={tab}
              onClick={e => handleChangeTab(e, tab)}
            >
              {tab}
            </a>
          );
        })}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
