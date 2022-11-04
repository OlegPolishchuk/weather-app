import React from 'react';

import Select from 'react-select';

import s from './Header.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { Theme } from 'enums';
import { useAppDispatch, useAppSelector, useTheme } from 'hooks';
import { storage } from 'model/storage';
import { selectCities, selectCurrentCity } from 'store/selectors';
import { appSlice } from 'store/slices/appSlice/appSlice';
import { City } from 'store/slices/appSlice/types';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const theme = useTheme();

  const cities = useAppSelector(selectCities);
  const currentCity = useAppSelector(selectCurrentCity);

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#333',
    }),
    menu: (styles: any) => ({
      ...styles,
      zIndex: '100',
    }),
  };

  const handleChangeTheme = (): void => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleChangeOption = (option: City | null): void => {
    storage.setItem('currentCity', option);

    if (option) {
      dispatch(appSlice.actions.setCurrentCity(option));
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <button type="button" className={s.change_theme} onClick={handleChangeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </button>
        <Select
          onChange={handleChangeOption}
          defaultValue={currentCity}
          value={currentCity}
          options={cities}
          styles={colorStyles}
        />
      </div>
    </header>
  );
};
