import { createTheme, ThemeOptions } from '@mui/material';
import { colors } from './colors';
import { IColorType } from './types';

export const theme = createTheme({
  colors: colors,
  typography: {
    fontFamily: 'Satoshi, Integral CF, sans-serif',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    body1: {
      fontSize: 18,
      fontWeight: 700,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    body2: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    body3: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    caption: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    button: {
      fontSize: 16,
      fontFamily: 'Satoshi',
      fontWeight: 400,
    },
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
  components: {
    MuiTypography: {
      defaultProps: {
        variant: 'subtitle1',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 16,
          padding: '12px 16px',
          borderRadius: 100,
          fontWeight: 400,
          ':focus': {
            borderWidth: 0,
          },
          // '-internal-autofill-select': {
          //   borderWidth: 0,
          // },
        },
        root: {
          borderRadius: 100,
          backgroundColor: '#F3F6F9',
          borderColor: '#E0E3E7',
          border: '1px solid',
          position: 'relative',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          borderWidth: 0,
          fontWeight: 600,
          fontSize: 20,
        },
        selectRoot: {
          borderWidth: 0,
          backgroundColor: 'transparent',
          ':hover': {
            backgroundColor: 'transparent',
          },
          ':focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '12px 16px',
      },
    },
  },
} as ThemeOptions & { colors: IColorType });
