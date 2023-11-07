import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Radio, RadioProps } from '@mui/material';

export const RadioButton = ({
  className,
  ...props
}: Omit<RadioProps, 'variant'>) => {
  return (
    <Radio
      name="radio-buttons"
      icon={<CircleRoundedIcon />}
      checkedIcon={<CheckCircleRoundedIcon />}
      {...props}
    />
  );
};
