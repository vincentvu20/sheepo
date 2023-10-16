import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@/components';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/cms';
import { HomePage as HomePageWeb } from '@/pages/customer';
import CartPage from '@/pages/customer/cart-page';
import { LoginPage } from '@/pages/customer/login-page';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** ROUTERS FOR WEB-CUSTOMER */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageWeb />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/** ROUTERS FOR CMS */}
        <Route path="/cms">
          <Route index element={<HomePage />} />
        </Route>

        {/** NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
