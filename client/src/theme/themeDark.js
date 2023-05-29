import { createTheme } from '@mui/material/styles';
const themeOptionsDark = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

let themeDark = createTheme(themeOptionsDark);

export default themeDark