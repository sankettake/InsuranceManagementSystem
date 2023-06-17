import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch} from 'react-redux'

const LeaveRequest = () => {
    const [requestType, setRequestType] = React.useState('');
    const [fromValue, setFromValue] = React.useState(dayjs());
    const [toValue, setToValue] = React.useState(dayjs());
    const [reason, setReason] = React.useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setRequestType(event.target.value);
    };
    const handleFromChange = (newValue) => {
        setFromValue(newValue)
        setToValue(newValue.add(1,"day"))
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(requestType, reason)
        const duration = toValue.diff(fromValue, 'day')
        const random = Math.floor(Math.random() * 10000)
        dispatch({type:"ADD", payload: {id: random, type: requestType, user:"Sanket", duration, from: fromValue.format('DD MMM'), to: toValue.format('DD MMM'), reason }})
    }
    const onReasonChange = (event) => {
        setReason(event.target.value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputLabel id="type-label">Request Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            value={requestType}
            placeholder='Select Type'
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"Regularization"}>Attendance Regularization</MenuItem>
            <MenuItem value={"Leave"}>Leave</MenuItem>
          </Select>
            <DatePicker label="From Date" minDate={dayjs().subtract('10','days')} defaultValue={dayjs()} value={fromValue} onChange={handleFromChange}/>
            <DatePicker label="To Date" value={toValue} minDate={fromValue} onChange={(newValue) => setToValue(newValue)}/>
           <TextField id="standard-textarea" label="Reason" placeholder="Placeholder" value={reason} onChange={onReasonChange} multiline variant="standard"/>
           <Button variant="contained"  type='Submit' onClick={onSubmitHandler} endIcon={<SendIcon />}>Submit</Button>
            
       
        </LocalizationProvider>
      </Box>
    )
}

export default LeaveRequest