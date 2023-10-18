import { Button } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import { setIsLoggedCms } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(setIsLoggedCms('true'));
    ModalServices.showMessageSuccess({ message: 'Login successfully' });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};
