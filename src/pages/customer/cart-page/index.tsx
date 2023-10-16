import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EastIcon from '@mui/icons-material/East';
import SellIcon from '@mui/icons-material/Sell';
import { Button } from '@/components';
import Input from '@/components/Input/Input';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { setCart } from '@/redux/slices/cart-slice';
import Item from './components/Item';

export default function CartPage() {
  const navigate = useNavigate();
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
    <div className="max-w-[1440px] mx-auto font-santoshi sm:p-4 lg:p-3">
      <h3 className="text-xl font-normal  not-italic mb-5 sm:mb-2">
        <span
          className="text-black60 cursor-pointer"
          onClick={() => navigate('/')}
        >
          Home
        </span>
        <ChevronRightIcon className="text-black60" /> Cart
      </h3>
      <h1 className="text-4xl font-bold font-integralCF mb-6 sm:mb-3 sm:text-3xl lg:mb-3 lg:text-3xl">
        Your Cart
      </h1>
      <div className="flex gap-5 sm:flex-col lg:flex-col ">
        <div className="flex flex-col items-start w-full h-full px-6 rounded-3xl border sm:px-4">
          {cart.items.map(item => (
            <Item data={item} />
          ))}
        </div>
        <div className="flex flex-col w-full h-full px-6 py-5 gap-6 rounded-3xl border sm:px-5 sm:gap-4">
          <div className="flex flex-col gap-5 sm:gap-4">
            <h1 className="text-2xl font-medium not-italic sm:text-xl">
              Order Summary
            </h1>
            <h3 className="flex justify-between items-center text-xl text-black60 font-normal sm:text-xl">
              Subtotal <span className="text-[black]">${subtotal}</span>
            </h3>
            <h3 className="flex justify-between items-center text-xl text-black60 font-normal sm:text-xl">
              Discount (-20%) <span className="text-error">-${discount}</span>
            </h3>
            <h3 className="flex justify-between items-center text-xl text-black60 font-normal sm:text-xl">
              Delivary Fee <span className="text-black">$15</span>
            </h3>
            <hr />
            <h2 className="flex justify-between items-center text-xl font-normal sm:text-xl">
              Total
              <span className="font-medium text-2xl">
                ${subtotal === 0 ? 0 : total}
              </span>
            </h2>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex items-center flex-1 bg-snowFlake rounded-[62px] ">
              <label htmlFor="promo">
                <SellIcon className="cursor-pointer text-black60 sm:w-5 ml-3" />
              </label>
              <Input type="text" id="promo" placeholder="Add promo code" />
            </div>
            <Button className="!font-santoshi !px-10 sm:!px-6">Apply</Button>
          </div>
          <Button className="!font-santoshi !py-3 !text-5">
            Go to checkout &nbsp;
            <EastIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
