import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/common-hook';
import { PATH } from '@/routers/routes.path';

export const DashboardCmsLayout = () => {
  const authState = useAppSelector(store => store.auth);

  if (!authState?.adminAccessToken)
    return <Navigate to={PATH.CMS.AUTH.LOGIN} />;

  return <>Dashboard home layout</>;
};
