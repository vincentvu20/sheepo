import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@/components';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage, LoginPage } from '@/pages/cms';
import { HomePage as HomePageWeb } from '@/pages/customer';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** ROUTERS FOR WEB-CUSTOMER */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageWeb />} />
        </Route>

        {/** ROUTERS FOR CMS */}
        <Route path="/cms">
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/** NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
