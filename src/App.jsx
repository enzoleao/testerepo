import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br';
const locales = ['pt-br']
export default function App() {
  const [locale, setLocale] = React.useState('pt-br');
  const [value, setValue] = React.useState(null);
  const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
  };
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}
    adapterLocale={locale}
    >
    <DatePicker
      disablePast
      shouldDisableDate={isWeekend}
      inputFormat="DD-MM-YYYY"
      label="Basic example"
      value={value}
      onChange={(newValue) => {
        setValue(newValue.format("MM-DD-YYYY").toString());
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
    <button >VER DATA</button>
    </>
  )
}


