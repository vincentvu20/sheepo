import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DatePickerComponent = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          sx={{ border: 'none', '& .MuiInputBase-root': { border: 'none' } }}
          label="MM/DD/YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default DatePickerComponent;
