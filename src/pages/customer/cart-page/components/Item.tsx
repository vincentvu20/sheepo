import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import shirt_1 from '@/assets/images/shirt-1.png';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { setCart } from '@/redux/slices';

interface IItemProps {
  data: any;
}

const Item = (props: IItemProps) => {
  const { data } = props;

  const { cart } = useAppSelector(store => store);

  const dispatch = useAppDispatch();

  const handleCount = (id: string, action: 'up' | 'down') => {
    const isCount = action === 'up';
    const items = [...cart.items];
    const foundItem = items.findIndex((item: any) => item.id === id);

    items[foundItem] = {
      ...items[foundItem],
      amount: Math.max(
        isCount ? items[foundItem].amount + 1 : items[foundItem].amount - 1,
        0,
      ),
    };

    dispatch(setCart(items));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(setCart(cart.items.filter((item: any) => item.id !== id)));
  };

  return (
    <div className=" flex w-full gap-4 py-5 border-b xl:gap-5 xl:py-6">
      <img src={shirt_1} alt="###" className="rounded-lg w-[99px]" />
      <div className="w-full">
        <h2 className="flex justify-between items-center text-lg font-medium not-italic xl:text-2xl">
          Gradient Graphic T-shirt
          <DeleteIcon
            className="cursor-pointer text-error"
            onClick={() => handleDeleteItem(data.id)}
          />
        </h2>
        <h4 className="text-sm">
          Size :&nbsp;
          <span className="text-black60">{data.size}</span>
        </h4>
        <h4 className=" text-sm">
          Color :&nbsp;
          <span className="text-black60">{data.color}</span>
        </h4>
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-medium not-italic xl:text-2xl">
            ${data.price * data.amount}
          </h2>
          <div className=" flex gap-3 bg-snowFlake rounded-[62px] py-1 px-4 xl:gap-4 xl:py-3 xl:px-5">
            <button onClick={() => handleCount(data.id, 'down')}>
              <RemoveIcon />
            </button>
            <h4 className="text-lg xl:text-lg">{data.amount}</h4>
            <button onClick={() => handleCount(data.id, 'up')}>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
