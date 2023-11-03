import * as React from 'react';
import { RadioGroup } from '@mui/material';
import Radio, { RadioProps } from '@mui/material/Radio';

enum VariantRadio {
  'rounded-contained' = 'rounded-contained',
  'rounded-outlined' = 'rounded-outlined',
}

type IRadioProps = {
  variant?: `${VariantRadio}`;
} & Omit<RadioProps, 'variant'>;

export const RadioButtons = ({
  value,
  variant = 'rounded-contained',
  className,
  ...props
}: IRadioProps) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={selectedValue === value}
        onChange={handleChange}
        value={value}
        name="radio-buttons"
        {...props}
        // slotProps={{ input: { 'aria-label': 'A' } }}
      />
    </RadioGroup>
  );
};
