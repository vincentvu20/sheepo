import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks/common-hook';
import { PATH } from '@/routers/routes.path';

export const AuthCmsLayout = () => {
  const authState = useAppSelector(store => store.auth);
  return authState?.adminAccessToken ? (
    <Navigate to={PATH.CMS.DASHBOARD.HOME} />
  ) : (
    <Outlet />
  );
};
