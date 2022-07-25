import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif;`,
    body: ` 'Inter', sans-serif;`,
  },
  colors: {
    purple: '#8284FA',
    purpleDark: '#5E60CE',
    blue: '#4EA8DE',
    blueDark: '#1E6F9F',
    gray: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1a1a1a',
      700: '#0d0d0d',
    },
    danger: '#e25858',
  },
});
