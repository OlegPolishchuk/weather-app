import React, { useEffect } from 'react';

import Select from 'react-select';

import s from './Header.module.scss';

import { GlobalSvgSelector } from 'assets/images/icons/global/globalSvgSelector';
import { useTheme } from 'hooks';
import { ReturnComponentType } from 'types';

const options = [
  { value: 'city-1', label: 'Санкт-Петербург' },
  { value: 'city-2', label: 'Москва' },
  { value: 'city-3', label: 'Новгород' },
];

export const Header = (): ReturnComponentType => {
  const theme = useTheme();

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '10',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme ? '#fff' : '#333',
    }),
  };

  const handleChangeTheme = (): void => {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-bg',
      'components-bg',
      'card-bg',
      'card-shadow',
      'text-color',
    ];

    components.forEach(component => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme.theme})`,
      );
    });
  }, [theme.theme]);

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
        <Select defaultValue={options[0]} options={options} styles={colorStyles} />
      </div>
    </header>
  );
};
