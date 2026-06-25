import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#1565c0',
    },
    background: {
      default: '#f7f9fb',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
