import { useEffect } from 'react';
import EastIcon from '@mui/icons-material/East';
import SellIcon from '@mui/icons-material/Sell';
import { Breadcrumbs, Button, Input } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { setCart } from '@/redux/slices/cart-slice';
import Item from './components/Item';

export default function CartPage() {
  const { cart } = useAppSelector(store => store);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setCart([
        {
          id: 'xxxx',
          amount: 3,
          price: 145,
          size: 'Small',
          color: 'White',
          name: 'string',
          src: 'string',
        },
        {
          id: 'yyyy',
          amount: 1,
          price: 145,
          size: 'Mall',
          color: 'White',
          name: 'string',
          src: 'string',
        },
        {
          id: 'zzzz',
          amount: 2,
          price: 145,
          size: 'Large',
          color: 'White',
          name: 'string',
          src: 'string',
        },
      ]),
    );
  }, []);

  const subtotal = cart.items.reduce(
    (prev, current) => prev + current.amount * current.price,
    0,
  );
  const discount: number = subtotal / 5;
  const total: number = subtotal - discount + 15;

  return (
    <div className="max-w-[1440px] mx-auto font-santoshi p-2 md:p-3">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold font-integralCF mb-3 xl:text-4xl xl:mb-6">
        Your Cart
      </h1>
      <div className="flex flex-col gap-5 xl:flex-row xl:p-0">
        <div className="flex flex-col items-start w-full h-full px-3 rounded-3xl border xl:px-5">
          {cart.items.map(item => (
            <Item data={item} />
          ))}
        </div>
        <div className="flex flex-col w-full h-full px-5 py-5 gap-4 rounded-3xl border xl:px-6 xl:gap-6">
          <h1 className="text-xl font-medium not-italic xl:text-2xl">
            Order Summary
          </h1>
          <div className="flex flex-col gap-4 xl:gap-5">
            <h3 className="flex justify-between items-center text-lg text-black60 font-normal xl:text-xl">
              Subtotal
              <span className="font-bold text-[black]">${subtotal}</span>
            </h3>
            <h3 className="flex justify-between items-center text-lg text-black60 font-normal xl:text-xl">
              Discount (-20%)
              <span className="font-bold text-error">-${discount}</span>
            </h3>
            <h3 className="flex justify-between items-center text-lg text-black60 font-normal xl:text-xl">
              Delivary Fee <span className="font-bold text-black">$15</span>
            </h3>
            <hr />
            <h2 className="flex justify-between items-center text-xl font-normal ">
              Total
              <span className="font-bold text-2xl">
                ${subtotal === 0 ? 0 : total}
              </span>
            </h2>
          </div>
          <div className="flex gap-3 w-full">
            <Input
              disableErrorMessage
              className="!border-none"
              type="text"
              placeholder="Add promo code"
              required
              renderLeadingIcon={
                <SellIcon className="text-black60 cursor-pointer" />
              }
            />
            <button className="!font-santoshi flex text-white w-[119px] justify-center items-center bg-black rounded-[62px] h-[48px]">
              Apply
            </button>
          </div>
          <Button className="!font-santoshi !mb-[30px] !py-3 !text-5 h-[60px]">
            Go to checkout &nbsp;
            <EastIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
