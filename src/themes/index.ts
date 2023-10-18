import { createTheme, ThemeOptions } from '@mui/material';
import { colors } from './colors';
import { IColorType } from './types';

export const theme = createTheme({
  colors: colors,
  typography: {
    fontFamily: 'Satoshi, Integral CF, sans-serif',
    fontSize: 16,
  },
  palette: {
    mode: 'light',
    primary: {
      main: colors.black,
      light: colors.black,
      dark: colors.black,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.black60,
      light: colors.black60,
      dark: colors.black60,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
      light: colors.error,
      dark: colors.error,
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning,
      light: colors.warning,
      dark: colors.warning,
      contrastText: colors.white,
    },
    info: {
      main: colors.vibrantBlue,
      light: colors.vibrantBlue,
      dark: colors.vibrantBlue,
      contrastText: colors.white,
    },
    success: {
      main: colors.success,
      light: colors.success,
      dark: colors.success,
      contrastText: colors.white,
    },
  },
  components: {},
} as ThemeOptions & { colors: IColorType });
