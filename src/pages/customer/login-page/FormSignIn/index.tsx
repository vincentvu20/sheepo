import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import { FacebookIcon, GoogleIcon } from '@/assets';
import { LoginSchema } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { ModalServices } from '@/services/modal-service';

const SignIn = (props: any) => {
  const { show, setShow } = props;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = handleSubmit(() => {
    if (!!isDirty && !!isValid) {
      navigate('/');
      ModalServices.showMessageSuccess({
        message: 'Logged in successfully',
      });
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
          label="Email"
          type="text"
          placeholder="Your email..."
          register={register}
          name="email"
          errorMessage={errors?.email?.message}
          renderLeadingIcon={<PersonIcon />}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Your password..."
          register={register}
          name="password"
          errorMessage={errors?.password?.message}
          renderLeadingIcon={<LockOpenIcon />}
        />
        <Button type="submit" className="!font-santoshi !py-3 !mt-3 !text-lg">
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
