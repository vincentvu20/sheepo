import { Navigate } from 'react-router-dom';
import { ROUTES_CMS } from '@/common';
import { useAppSelector } from '@/hooks/common-hook';

export const RedirectLayout = () => {
  const { accessTokenCms } = useAppSelector(state => state.auth);
  return (
    <Navigate
      to={!accessTokenCms ? ROUTES_CMS.LOGIN : ROUTES_CMS.DASHBOARD}
      replace
    />
  );
};
