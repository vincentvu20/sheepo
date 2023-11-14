import { useCallback, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTES_CMS } from '@/common';
import { useAppSelector } from '@/hooks/common-hook';

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { accessTokenCms } = useAppSelector(state => state.auth);
  const checkLogged = useCallback(() => {
    if (accessTokenCms) {
      navigate(ROUTES_CMS.HOME, { replace: true });
    }
  }, [accessTokenCms, navigate]);

  // effect
  useEffect(() => {
    checkLogged();
  }, [checkLogged]);

  return <Outlet />;
};
