import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  InputLabel,
  SvgIcon,
  Typography,
} from '@mui/material';
import clsx from 'classnames';
import { useTheme } from '@/hooks/common-hook';

export const Input = ({
  label,
  name,
  id,
  register,
  contentContainerStyle,
  className,
  errorMessage,
  sx,
  type,
  renderLeadingIcon,
  disableErrorMessage = false,
  value,
  startIcon,
  endIcon,
  onClickIconEnd,

  ...props
}: InputBaseProps & {
  register?: UseFormRegister<any>;
  label?: string;
  contentContainerStyle?: string;
  errorMessage?: string;
  renderLeadingIcon?: React.ReactNode;
  disableErrorMessage?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClickIconEnd?: () => void;
}) => {
  const { colors } = useTheme();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const adornment = (position: 'start' | 'end', icon?: React.ReactNode) => {
    if (!icon) {
      return undefined;
    }
    return (
      <InputAdornment position={position}>
        {position === 'start' ? (
          <SvgIcon>{icon}</SvgIcon>
        ) : (
          <div
            // className="cursor-pointer"
            className={clsx(
              'absolute inset-y-0 right-0 text-[#000] mr-5 flex items-center',
              value ? 'cursor-pointer' : 'cursor-default ',
            )}
            onClick={onClickIconEnd}>
            <SvgIcon className="z-50">{icon}</SvgIcon>
          </div>
        )}
      </InputAdornment>
    );
  };

  return (
    <div className={clsx('w-full', contentContainerStyle)}>
      {label ? (
        <InputLabel shrink htmlFor="bootstrap-input">
          {label}{' '}
          <span className="text-error">{props.required ? '*' : ''}</span>
        </InputLabel>
      ) : (
        <></>
      )}
      <div className="relative">
        <InputBase
          className={clsx('w-full ring-0', className)}
          type={isShowPassword ? 'text' : type}
          endAdornment={adornment('end', endIcon)}
          startAdornment={adornment('start', startIcon)}
          componentsProps={{
            root: {
              className: clsx(
                'relative',
                { 'pl-8': !!renderLeadingIcon },
                { 'pr-8': type === 'password' },
              ),
            },
            input: {
              className: 'ring-0 focus:ring-0 ring-slate-700',
            },
          }}
          {...(register && name ? { ...register(name) } : {})}
          {...props}
        />
        {renderLeadingIcon ? (
          <div className="absolute top-3 left-4 z-20">
            <div className="h-6 w-6">{renderLeadingIcon}</div>
          </div>
        ) : (
          <></>
        )}

        {type === 'password' ? (
          <div className="absolute top-3 right-4 z-20">
            <IconButton
              className="h-6 w-6 !p-0"
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? (
                <EyeSlashIcon color="black" />
              ) : (
                <EyeIcon color="black" />
              )}
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </div>
      {disableErrorMessage ? (
        <></>
      ) : errorMessage ? (
        <Typography sx={{ color: colors.error }}>{errorMessage}</Typography>
      ) : (
        <div className="h-[22px]"></div>
      )}
    </div>
  );
};
