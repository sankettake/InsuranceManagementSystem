import { createTheme } from '@mui/material/styles';
const themeOptionsLight = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

let themeLight = createTheme(themeOptionsLight);

export default themeLight