import { useMemo } from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';
import clsx from 'classnames';

enum VariantButton {
  'rounded-contained' = 'rounded-contained',
  'rounded-outlined' = 'rounded-outlined',
  'empty' = 'empty',
}

type IButtonProps = {
  variant?: `${VariantButton}`;
} & Omit<ButtonProps, 'variant'>;

export const Button = ({
  variant = 'rounded-contained',
  className,
  sx,
  ...other
}: IButtonProps) => {
  const defaultStyleByVariant = useMemo<{
    [k in `${VariantButton}`]: {
      className: string;
      variant: 'contained' | 'outlined' | 'text';
    };
  }>(() => {
    return {
      'rounded-contained': {
        className:
          '!rounded-full px-4 !py-3 text-sm font-semibold text-white shadow-sm',
        variant: 'contained',
      },
      'rounded-outlined': {
        className:
          '!rounded-full bg-white px-4 !py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        variant: 'outlined',
      },
      empty: {
        className: '',
        variant: 'text',
      },
    };
  }, []);

  return (
    <MUIButton
      type="button"
      style={{ textTransform: 'capitalize' }}
      variant={defaultStyleByVariant[variant].variant}
      className={clsx(defaultStyleByVariant[variant].className, className)}
      sx={{
        textTransform: 'none',
        ...sx,
      }}
      {...other}
    />
  );
};
