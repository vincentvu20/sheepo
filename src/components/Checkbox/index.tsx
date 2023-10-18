import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';
import clsx from 'classnames';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkbox = ({
  className,
  ...props
}: Omit<CheckboxProps, 'variant'>) => {
  return (
    <MUICheckbox
      {...label}
      icon={<CheckCircleRoundedIcon />}
      checkedIcon={<CircleRoundedIcon />}
      className={clsx(className)}
      {...props}
    />
  );
};
