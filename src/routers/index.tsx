import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@/components';
import { AuthCmsLayout } from '@/layouts/cms/AuthLayout';
import { DashboardCmsLayout } from '@/layouts/cms/DashboardCmsLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage as HomePageWeb } from '@/pages/customer';
import { routes } from './routers';
import { PATH } from './routes.path';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** ROUTERS FOR WEB-CUSTOMER */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageWeb />} />
        </Route>

        {/** ROUTERS FOR CMS */}
        <Route key={PATH.CMS.MAIN} path={PATH.CMS.MAIN}>
          {routes.map(route => (
            <Route
              key={route.mainPath}
              path={route.mainPath}
              element={
                route.mustLogin ? <DashboardCmsLayout /> : <AuthCmsLayout />
              }
            >
              {route.childPath.map(childRoute => {
                return (
                  <Route
                    key={childRoute.path}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                );
              })}
            </Route>
          ))}
        </Route>

        {/** NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
