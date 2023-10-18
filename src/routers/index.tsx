import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES_CMS } from '@/common';
import { NotFound } from '@/components';
import { useAppSelector } from '@/hooks/common-hook';
import { AuthLayout as CMSAuthLayout } from '@/layouts/cms/AuthLayout';
import { MainLayout as CMSMainLayout } from '@/layouts/cms/MainLayout';
import { MainLayout } from '@/layouts/customer/MainLayout';
import {
  BookingsPage,
  CategoriesPage,
  LoginPage,
  ProductsPage,
  UsersPage,
} from '@/pages/cms';
import { HomePage as HomePageWeb } from '@/pages/customer';

export const Routers = () => {
  const { accessTokenCms } = useAppSelector(state => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/** ROUTERS FOR WEB-CUSTOMER */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageWeb />} />
        </Route>

        {/** ROUTERS FOR CMS */}
        <Route path="cms">
          <Route
            index
            element={
              <Navigate
                to={!accessTokenCms ? ROUTES_CMS.LOGIN : ROUTES_CMS.USERS}
                replace
              />
            }
          />
          <Route element={<CMSMainLayout />}>
            <Route path="users" element={<UsersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Route>
          <Route element={<CMSAuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>

        {/** NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
