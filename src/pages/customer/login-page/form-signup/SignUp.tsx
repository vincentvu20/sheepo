import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { SignupSchema } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { ModalServices } from '@/services/modal-service';

const SignUp = (props: any) => {
  const { show, setShow, isShowPassword, setIsShowPassword } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = handleSubmit(
    () => {
      // if (email && password) {
      if (!!isDirty && isValid) {
        setShow(!show);
        ModalServices.showMessageSuccess({
          message: 'Registered successfully',
        });
      }
    },
    error => {
      console.log('error =>', error);
    },
  );

  return (
    <div className="w-full p-5 my-auto">
      <h1 className="text-5xl not-italic text-center font-bold font-integralCF cursor-default">
        SHOP.CO
      </h1>
      <h1 className="text-3xl font-medium my-8 font-santoshi">Sign Up</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
        <label className="text-xl font-santoshi" htmlFor="email">
          Email:
        </label>
        <Input
          id="email"
          type="email"
          // value={email}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e)}
          placeholder="Your email..."
          {...{ register }}
          name="email"
        />
        {errors.email && (
          <p className=" text-error text-lg text-center">
            {errors.email?.message}
          </p>
        )}
        <label className="text-xl font-santoshi" htmlFor="name">
          Name:
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your name..."
          {...{ register }}
          name="name"
        />
        {errors.name && (
          <p className=" text-error text-lg text-center">
            {errors.name?.message}
          </p>
        )}
        <label className="text-xl font-santoshi" htmlFor="phone">
          Phone:
        </label>
        <Input
          id="phone"
          type="text"
          placeholder="Your phone..."
          {...{ register }}
          name="phone"
        />
        {errors.phone && (
          <p className=" text-error text-lg text-center">
            {errors.phone?.message}
          </p>
        )}
        <label className="text-xl font-santoshi" htmlFor="password">
          Password:
        </label>
        <div className="relative">
          <Input
            id="password"
            type={isShowPassword === true ? 'type' : 'password'}
            // value={password}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e)}
            placeholder="Your password..."
            {...{ register }}
            name="password"
          />
          <p
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="text-black60 absolute right-3 top-1/4 cursor-pointer "
          >
            {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </p>
        </div>
        {errors.password && (
          <p className=" text-error text-lg text-center">
            {errors.password?.message}
          </p>
        )}
        <Button type="submit" className="!font-santoshi !py-3 !text-lg !mt-3">
          Register
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
