import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { Card, Typography } from '@mui/material';
import { Button, Input } from '@/components';
import { useAppDispatch, useTheme } from '@/hooks/common-hook';
import { setIsLoggedCms } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const handleLogin = () => {
    dispatch(setIsLoggedCms('true'));
    ModalServices.showMessageSuccess({ message: 'Login successfully' });
  };

  return (
    <div className="h-screen w-screen">
      <div className="bg-[url('../bg-cms.jpg')] h-full w-screen bg-cover flex justify-center lg:justify-end items-center lg:pr-[200px]">
        <Card
          sx={{
            width: 500,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
          }}>
          <Typography variant="h3">Login as SuperAdmin</Typography>

          <div className="flex flex-1 flex-col w-full justify-center mt-6">
            <Input
              placeholder="User name"
              label="User name"
              required
              renderLeadingIcon={<UserIcon color={colors.black} />}
            />
            <Input
              placeholder="Password"
              label="Password"
              type="password"
              required
              renderLeadingIcon={<LockClosedIcon color={colors.black} />}
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
};
