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
    <div className=" flex w-full gap-[16px] py-[24px] sm:gap-[14px] border-b sm:py-[18px]">
      <img src={shirt_1} alt="###" className="rounded-lg sm:w-[99px]" />
      <div className="w-full">
        <h2 className="flex justify-between items-center text-[20px] font-medium not-italic sm:text-[16px]">
          Gradient Graphic T-shirt
          <DeleteIcon
            className="cursor-pointer text-error"
            onClick={() => handleDeleteItem(data.id)}
          />
        </h2>
        <h4 className="text-[14px]">
          Size :&nbsp;
          <span className="text-black60">{data.size}</span>
        </h4>
        <h4 className=" text-[14px]">
          Color :&nbsp;
          <span className="text-black60">{data.color}</span>
        </h4>
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-medium not-italic sm:text-[20px]">
            ${data.price * data.amount}
          </h2>
          <div className=" flex gap-[20px] bg-snowFlake rounded-[62px] py-[12px] px-[20px] sm:py-[5px] sm:px-[15px] sm:gap-[10px]">
            <button onClick={() => handleCount(data.id, 'down')}>
              <RemoveIcon />
            </button>
            <h4 className="text-[18px]">{data.amount}</h4>
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
