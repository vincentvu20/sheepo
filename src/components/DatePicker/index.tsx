import * as React from 'react';
import { ReactNode, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface IDate {
  children: ReactNode;
  title: string;
  className?: string;
}
export const DatePickerComponent = ({ className, title, children }: IDate) => {
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
