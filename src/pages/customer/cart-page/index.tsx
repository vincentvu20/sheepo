import { useEffect } from 'react';
import clsx from 'classnames';
import { Breadcrumbs } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { setCart } from '@/redux/slices/cart-slice';
import { ListProduct, Payment } from './components';
import { LIST_CART } from './components/__mocks__/data';

export const CartPage = () => {
  const { cart } = useAppSelector(store => store);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCart(LIST_CART));
  }, [dispatch]);

  return (
    <div className="max-w-[1440px] mx-auto font-santoshi p-2 md:p-3">
      <Breadcrumbs />
      <h1
        className={clsx(
          'text-3xl font-bold font-integralCF mb-3',
          'xl:text-4xl xl:mb-6',
        )}>
        Your Cart
      </h1>
      <div className="flex flex-col gap-5 xl:flex-row xl:p-0">
        <div
          className={clsx(
            'flex flex-col items-start',
            'w-full h-full px-3 rounded-3xl border',
            'md:px-4 xl:px-5',
          )}>
          {cart.items.map(item => (
            <ListProduct data={item} />
          ))}
        </div>
        <Payment />
      </div>
    </div>
  );
};
