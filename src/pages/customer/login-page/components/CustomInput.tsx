import React, { useState } from 'react';
import { Input } from '@/components';

type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
  errors: any;
  isPassword?: boolean;
};

export const CustomInput: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  name,
  errors,
  isPassword = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <div>
      <label className="text-xl font-santoshi" htmlFor={id}>
        {label}:
      </label>
      {isPassword ? (
        <div className="relative">
          <Input
            id={id}
            type={isShowPassword ? 'text' : 'password'}
            placeholder={placeholder}
          />
          <p
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="text-black60 absolute right-3 top-1/4 cursor-pointer"
          >
            {isShowPassword ? 'Hide' : 'Show'} Password
          </p>
        </div>
      ) : (
        <Input id={id} type={type} placeholder={placeholder} />
      )}
      {errors[name] && (
        <p className="text-error text-lg text-center">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

{
  /* <CustomInput
        label="Email"
        id="email"
        type="email"
        placeholder="Your email..."
        name="email"
        errors={errors}
      /> */
}
