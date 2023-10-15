import { ReactNode } from 'react';

export const PATH = {
  CMS: {
    MAIN: '/cms',
    AUTH: {
      MAIN: '/cms/auth',
      LOGIN: '/cms/auth/login',
    },
    DASHBOARD: {
      MAIN: '/cms/dashboard',
      HOME: '/cms/dashboard/home',
      USER: '/cms/dashboard/user',
    },
  },
};

export interface IRoute {
  path: string;
  element: ReactNode;
  name?: string;
  icon?: ReactNode;
  isChildRoute?: boolean;
}

export interface IRouteAccordion {
  path: string;
  label: string;
  icon?: ReactNode;
  accordionChild: IRoute[];
  isChildRoute?: boolean;
}
