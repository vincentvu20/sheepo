import { Slider, SliderOwnProps, SxProps } from '@mui/material';

interface RangeSliderProps extends Omit<SliderOwnProps, 'onChange'> {
  value: [number, number];
  onChange: (newValue: [number, number]) => void;
  min: number;
  max: number;
  valueLabelDisplay: 'auto' | 'on' | 'off';
  format: (value: string | number) => string | number;
  sx?: SxProps;
}

export const RangeSlider = ({
  value,
  onChange,
  min,
  max,
  valueLabelDisplay,
  format,
  sx,
  ...others
}: RangeSliderProps) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    onChange(newValue as [number, number]);
  };

  const handleValueFormat = (value: string | number) => format(value);

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay={valueLabelDisplay}
        aria-labelledby="range-slider"
        valueLabelFormat={handleValueFormat}
        min={min}
        max={max}
        sx={sx}
        {...others}
      />
    </div>
  );
};
