import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { NotFound } from '@/components';
import { AuthLayout as CMSAuthLayout } from '@/layouts/cms/AuthLayout';
import { MainLayout as CMSMainLayout } from '@/layouts/cms/MainLayout';
import { RedirectLayout } from '@/layouts/cms/RedirectLayout';
import { MainLayout } from '@/layouts/customer/MainLayout';
import {
  AttributesPage,
  BookingsPage,
  CategoriesPage,
  LoginPage,
  ProductsPage,
  UsersPage,
} from '@/pages/cms';
import {
  CartPage as CartPageWeb,
  HomePage as HomePageWeb,
  ProductDetailPage as ProductDetailPageWeb,
} from '@/pages/customer';

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/** ROUTERS FOR WEB-CUSTOMER */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<HomePageWeb />}
          handle={{
            crumb: () => {
              return {
                href: '/',
                name: 'Home',
              };
            },
          }}
        />
        <Route
          path="products/:productId"
          element={<ProductDetailPageWeb />}
          handle={{
            crumb: () => ({
              href: 'products',
              name: 'Products',
            }),
          }}
        />
        <Route
          index
          element={<CartPageWeb />}
          handle={{
            crumb: () => ({
              href: 'cart',
              name: 'Cart',
              parentCrumb: {
                href: '/',
                name: 'Home',
              },
            }),
          }}
          path="cart"
        />
      </Route>

      {/** ROUTERS FOR CMS */}
      <Route path="cms">
        <Route index element={<RedirectLayout />} />
        <Route
          element={<CMSMainLayout />}
          handle={{
            crumb: () => {
              return {
                href: '/cms',
                name: 'Dashboard',
              };
            },
          }}>
          <Route
            path="users"
            element={<UsersPage />}
            handle={{
              crumb: () => ({
                href: 'users',
                name: 'Users',
              }),
            }}
          />
          <Route
            path="attributes"
            element={<AttributesPage />}
            handle={{
              crumb: () => ({
                href: 'attributes',
                name: 'Attributes',
              }),
            }}
          />
          <Route
            path="products"
            element={<ProductsPage />}
            handle={{
              crumb: () => ({
                href: 'products',
                name: 'Products',
              }),
            }}
          />
          <Route
            path="bookings"
            element={<BookingsPage />}
            handle={{
              crumb: () => ({
                href: 'bookings',
                name: 'Bookings',
              }),
            }}
          />
          <Route
            path="categories"
            element={<CategoriesPage />}
            handle={{
              crumb: () => ({
                href: 'categories',
                name: 'Categories',
              }),
            }}
          />
        </Route>
        <Route element={<CMSAuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>

      {/** NOT FOUND ROUTER */}
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
