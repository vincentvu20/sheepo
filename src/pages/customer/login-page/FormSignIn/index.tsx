import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { FacebookIcon, GoogleIcon } from '@/assets';
import { LoginSchema } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import { login } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import { IErrorsProps } from '@/types/common-global.types';

const SignIn = (props: any) => {
  const { show, setShow } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = handleSubmit(async data => {
    try {
      setIsLoading(true);
      await dispatch(login(data)).unwrap();
      navigate('/');
      ModalServices.showMessageSuccess({ message: 'Login successfully' });
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  });
  return (
    <div className="w-full p-5 my-auto">
      <h1 className="text-4xl not-italic text-center font-bold font-integralCF cursor-default xl:text-5xl">
        SHOP.CO
      </h1>
      <h2 className="text-2xl font-bold my-4 font-santoshi xl:text-3xl xl:my-8">
        Sign In
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <Input
          required
          label="Email"
          type="text"
          placeholder="Your email..."
          register={register}
          name="email"
          errorMessage={errors?.email?.message}
          renderLeadingIcon={<UserIcon />}
        />
        <Input
          required
          label="Password"
          type="password"
          placeholder="Your password..."
          register={register}
          name="password"
          errorMessage={errors?.password?.message}
          renderLeadingIcon={<LockClosedIcon />}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="!font-santoshi !py-3 !mt-3 !text-lg">
          Login
        </Button>
      </form>
      <div className="my-5 flex gap-5 flex-col items-center font-santoshi">
        <span>----- or -----</span>
        <p className="flex items-center px-5 py-3 rounded-[62px] border cursor-pointer">
          <GoogleIcon /> &nbsp; Sign in with Google
        </p>
        <p className="flex items-center px-5 py-3 rounded-[62px] border cursor-pointer">
          <FacebookIcon /> &nbsp; Sign in with Facebook
        </p>
        <p className="text-black60 text-xl">
          Don't have an account? &nbsp;
          <span
            onClick={() => setShow(!show)}
            className="cursor-pointer text-black font-medium hover:underline ">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
