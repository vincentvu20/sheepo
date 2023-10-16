import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import clsx from 'classnames';

export const Input = forwardRef(
  (
    {
      className,
      type,
      name,
      id,
      register,
      ...props
    }: ComponentPropsWithoutRef<'input'> & {
      register?: UseFormRegister<any>;
    },
    ref: React.LegacyRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'py-3 px-4 rounded-[62px]',
          'outline-none font-santoshi !ring-0 !border-none',
          ' text-black w-full bg-snowFlake ',
          className,
        )}
        id={id}
        type={type}
        {...props}
        {...(register && name ? { ...register(name) } : {})}
      />
    );
  },
);
