import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import background from '@/assets/images/background-auth.png';

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const LogInForm = () => {
    return (
      <div className="w-full p-[20px] my-auto">
        <h1 className="text-[32px] not-italic text-center font-bold font-integralCF">
          SHOP.CO
        </h1>
        <h2 className="text-2xl font-medium my-[30px] font-santoshi">
          Sign In
        </h2>
        <form className="flex flex-col gap-[20px]">
          <input
            className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi !ring-0"
            type="email"
            placeholder="Your email..."
          />
          <div className="relative">
            <input
              className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi focus:!shadow-none !ring-0"
              type={isShowPassword === true ? 'type' : 'password'}
              placeholder="Your password..."
            />
            <p
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="text-black60 absolute right-[10px] top-1/4 cursor-pointer "
            >
              {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </p>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center px-[54px] py-[16px] rounded-[62px] bg-black text-white font-santoshi"
          >
            Login
          </button>
        </form>
        <div className="my-[20px] flex gap-[20px] flex-col items-center font-santoshi">
          <span>----- or -----</span>
          <p className="flex items-center px-[20px] py-[10px] rounded-[62px] border cursor-pointer">
            <GoogleIcon /> &nbsp; Sign in with Google
          </p>
          <p className="flex items-center px-[20px] py-[10px] rounded-[62px] border cursor-pointer">
            <FacebookIcon /> &nbsp; Sign in with Facebook
          </p>
          <p className="text-black60">
            Don't have an account? &nbsp;
            <span
              onClick={() => setShow(!show)}
              className="cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    );
  };

  const LogUpForm = () => {
    const schema = yup
      .object({
        name: yup.string(),
        email: yup.string(),
        phone: yup.number().positive().integer(),
        password: yup.string().min(8).max(16),
      })
      .required();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = handleSubmit((data: any) => console.log(data));

    return (
      <div className="w-full p-[20px] my-auto">
        <h1 className="text-center text-[32px] not-italic font-bold font-integralCF">
          SHOP.CO
        </h1>
        <h1 className="text-2xl font-medium my-[30px] font-santoshi">
          Sign Up
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-[10px] ">
          <input
            {...register('name')}
            className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi !ring-0"
            type="text"
            placeholder="Your name..."
          />
          <p className=" text-error">{errors.name?.message}</p>
          <input
            className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi !ring-0"
            {...register('email')}
            type="email"
            placeholder="Your email..."
          />
          <p className=" text-error">{errors.email?.message}</p>
          <input
            {...register('phone')}
            className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi !ring-0"
            type="text"
            placeholder="Your phone..."
          />
          <p className=" text-error">{errors.phone?.message}</p>
          <div className="relative">
            <input
              className="outline-none text-black w-full bg-snowFlake py-[12px] px-[16px] rounded-[62px] border-none font-santoshi !ring-0"
              type={isShowPassword === true ? 'type' : 'password'}
              placeholder="Your password..."
            />
            <p
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="text-black60 absolute right-[10px] top-1/4 cursor-pointer "
            >
              {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </p>
          </div>
          <p className=" text-error">{errors.password?.message}</p>
          <button
            type="submit"
            className="flex items-center justify-center px-[54px] py-[16px] rounded-[62px] bg-black text-white font-santoshi"
            onClick={() => setShow(show)}
          >
            Register
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className="flex justify-center w-full h-screen mx-auto xsmall:flex-col 2xsmall:flex-col">
      <img
        src={background}
        alt="#"
        className="w-3/4 2xsmall:w-full xsmall:w-full"
      />
      {!show ? <LogInForm /> : <LogUpForm />}
    </div>
  );
};
