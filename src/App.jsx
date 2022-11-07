import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function App() {
  const [value, setValue] = React.useState(null);
  const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      disabledPast
      shouldDisableDate={isWeekend}
      label="Basic example"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
  )
}


