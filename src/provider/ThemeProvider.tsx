import { ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from 'context/ThemeContext';
import { ReturnComponentType } from 'types';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props): ReturnComponentType => {
  const [theme, setTheme] = useState('light');

  const changeTheme = (theme: string): void => {
    setTheme(theme);
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
