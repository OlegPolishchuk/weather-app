import { ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from 'context/ThemeContext';
import { Theme } from 'enums';
import { changeCssRootVariables } from 'model/changeCssRootVariables';
import { storage } from 'model/storage';
import { ReturnComponentType } from 'types';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props): ReturnComponentType => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

  const changeTheme = (theme: Theme): void => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
