import './App.css';
import themeLight from './theme/theme'
import themeDark from './theme/themeDark'
import { CssBaseline, ThemeProvider} from '@mui/material';
import {Fragment, useMemo} from 'react'
import Home from './components/Home';
import useMediaQuery from '@mui/material/useMediaQuery'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasicDateCalendar from './components/AttendanceCalendar'
import Directory from './components/Directory';
import Inbox from './components/Inbox';
import LeaveRequest from './components/LeaveRequest';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/attendance', element: <BasicDateCalendar />},
      { path: '/leave', element: <LeaveRequest />},
      { path: '/inbox', element: <Inbox />},
      { path: '/directory', element: <Directory />}
    ]
  },
  
])


function App() {
  const preferedMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = useMemo(() =>  preferedMode ? themeDark : themeLight,[preferedMode])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <Fragment>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <Home />
          </LocalizationProvider> 
        </Fragment>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
