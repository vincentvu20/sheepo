import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FacebookIcon, GoogleIcon } from '@/assets';
import { Button, Input } from '@/components';
import { ModalServices } from '@/services/modal-service';

const SignIn = (props: any) => {
  const { show, setShow, isShowPassword, setIsShowPassword } = props;
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/');
    ModalServices.showMessageSuccess({
      message: 'Logged in successfully',
    });
  };
  return (
    <div className="w-full p-5 my-auto">
      <h1 className="text-5xl not-italic text-center font-bold font-integralCF cursor-default">
        SHOP.CO
      </h1>
      <h2 className="text-3xl font-medium my-8 font-santoshi">Sign In</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-xl font-santoshi">
          Email :
        </label>
        <Input type="email" id="email" placeholder="Your email..." />
        <label htmlFor="password" className="text-xl font-santoshi">
          Password:
        </label>
        <div className="relative">
          <Input
            type={isShowPassword === true ? 'type' : 'password'}
            placeholder="Your password..."
          />
          <p
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="text-black60 absolute right-3 top-1/4 cursor-pointer "
          >
            {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </p>
        </div>
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
            className="cursor-pointer text-black font-medium hover:underline "
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
