import { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext';

export const useTheme = (): any => useContext(ThemeContext);
