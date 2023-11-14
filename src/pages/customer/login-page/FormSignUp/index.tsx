import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'classnames';
import { SignUpSchema } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import { signup } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import { IErrorsProps } from '@/types/common-global.types';

const FormSignUp = (props: any) => {
  const { show, setShow } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmit = handleSubmit(async data => {
    try {
      setIsLoading(true);
      await dispatch(signup(data)).unwrap();
      setShow(!show);
      ModalServices.showMessageSuccess({ message: 'Register successfully' });
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="w-full p-5 my-auto">
      <h1
        className={clsx(
          'text-4xl text-center ',
          'not-italic font-bold font-integralCF ',
          'cursor-default xl:text-5xl',
        )}>
        SHOP.CO
      </h1>
      <h1 className="text-2xl font-bold my-4 font-santoshi xl:text-3xl xl:my-8">
        Sign Up
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
        <Input
          errorMessage={errors?.email?.message}
          required
          label="Email"
          type="email"
          placeholder="Your email..."
          register={register}
          name="email"
        />
        <Input
          errorMessage={errors?.password?.message}
          required
          label="password"
          type="password"
          placeholder="Your password..."
          register={register}
          name="password"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="!font-santoshi !py-3 !text-lg !mt-3">
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
