import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { ModalServices } from '@/services/modal-service';

const FormSignUp = (props: any) => {
  const { show, setShow } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = handleSubmit(() => {
    if (!!isDirty && !!isValid) {
      setShow(!show);
      ModalServices.showMessageSuccess({
        message: 'Registered successfully',
      });
    }
  });

  return (
    <div className="w-full p-5 my-auto">
      <h1 className="text-4xl not-italic text-center font-bold font-integralCF cursor-default xl:text-5xl">
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
          errorMessage={errors?.name?.message}
          required
          label="name"
          type="text"
          placeholder="Your name..."
          register={register}
          name="name"
        />
        <Input
          errorMessage={errors?.phone?.message}
          required
          label="phone"
          type="text"
          placeholder="Your phone..."
          register={register}
          name="phone"
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
        <Button type="submit" className="!font-santoshi !py-3 !text-lg !mt-3">
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
