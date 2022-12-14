import { createContext } from 'react';

import { Theme } from 'enums';

interface Props {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
