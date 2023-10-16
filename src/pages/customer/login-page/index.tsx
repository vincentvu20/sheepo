import { useState } from 'react';
import background from '@/assets/images/background-auth.png';
import SignIn from './form-signin/SignIn';
import SignUp from './form-signup/SignUp';

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex justify-center w-full h-screen mx-auto lg:flex-col sm:flex-col">
      <img src={background} alt="#" className="w-2/3 sm:w-full lg:w-full" />
      {!show ? (
        <SignIn
          show={show}
          setShow={setShow}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
        />
      ) : (
        <SignUp
          show={show}
          setShow={setShow}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
        />
      )}
    </div>
  );
};
