import { createTheme } from '@shopify/restyle';

const palette = {
  orangeLight: '#FFB380',
  orangePrimary: '#FF8A3D',
  orangeDark: '#E65C00',

  yellowLight: '#FFE599',
  yellowPrimary: '#FFD24D',
  yellowDark: '#F5B800',

  greenLight: '#A8E6A1',
  greenPrimary: '#6FCF67',
  greenDark: '#45A83E',

  redLight: '#FF8787',
  redPrimary: '#FF5757',
  redDark: '#D93636',

  black: '#1A1A1A',
  gray: '#757575',
  grayLight: '#E8E8E8',
  white: '#FFFFFF',
  cream: '#FFF8F0',
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.cream,
    cardPrimaryBackground: palette.orangePrimary,
    cardSecondaryBackground: palette.white,
    textPrimary: palette.black,
    textSecondary: palette.gray,
    accent: palette.redPrimary,
    success: palette.greenPrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 15,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  }
});

export type Theme = typeof theme;