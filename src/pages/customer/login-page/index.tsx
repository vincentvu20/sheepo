import { useState } from 'react';
import background from '@/assets/images/background-auth.png';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';

export const LoginPage = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center w-full h-screen mx-auto xl:flex-row">
      <img src={background} alt="#" className="xl:w-2/3 w-full" />
      {!show ? (
        <FormSignIn show={show} setShow={setShow} />
      ) : (
        <FormSignUp show={show} setShow={setShow} />
      )}
    </div>
  );
};
