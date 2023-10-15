import { HomePage, LoginPage } from '@/pages/cms';
import { IRoute, PATH } from './routes.path';

export const publicCmsRoutes: IRoute[] = [
  {
    path: PATH.CMS.AUTH.LOGIN,
    element: <LoginPage />,
  },
];
export const privateCmsRoutes: IRoute[] = [
  {
    path: PATH.CMS.DASHBOARD.HOME,
    element: <HomePage />,
  },
  {
    path: PATH.CMS.DASHBOARD.USER,
    element: <div> User Page</div>,
  },
];

export const routes = [
  {
    mainPath: PATH.CMS.DASHBOARD.MAIN,
    childPath: privateCmsRoutes,
    mustLogin: true,
  },
  {
    mainPath: PATH.CMS.AUTH.MAIN,
    childPath: publicCmsRoutes,
    mustLogin: false,
  },
];
