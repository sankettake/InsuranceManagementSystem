import './App.css';
import themeLight from './theme/theme'
import themeDark from './theme/themeDark'
import {Button, CssBaseline, ThemeProvider} from '@mui/material';
import {Fragment, useMemo} from 'react'
import Navbar from './components/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  const preferedMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = useMemo(() =>  preferedMode ? themeDark : themeLight,[preferedMode])

  return (
    <ThemeProvider theme={theme}>
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <header className="App-header">
        </header>
        <Navbar />
        <Button variant='outlined' color="secondary">First UI component</Button>
      </LocalizationProvider> 
    </Fragment>
    </ThemeProvider>
  );
}

export default App;
