import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Typography } from '@mui/material';
import { schemaLoginCms } from '@/common/utils/schema';
import { Button, Input } from '@/components';
import { useAppDispatch, useTheme } from '@/hooks/common-hook';
import { loginCms } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import { IErrorsProps } from '@/types/common-global.types';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schemaLoginCms),
  });

  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = handleSubmit(async data => {
    try {
      setIsLoading(true);
      await dispatch(loginCms(data)).unwrap();
      ModalServices.showMessageSuccess({ message: 'Login successfully' });
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  });

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
              register={register}
              name="email"
              errorMessage={errors?.email?.message}
            />
            <Input
              placeholder="Password"
              label="Password"
              type="password"
              required
              renderLeadingIcon={<LockClosedIcon color={colors.black} />}
              register={register}
              name="password"
              errorMessage={errors?.password?.message}
            />
          </div>
          <Button disabled={isLoading} onClick={handleLogin} className="w-full">
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
};
