import { RatingView } from '../Rating';

interface CardProductProps {
  image: string;
  name: string;
  star: number;
  price: string;
  cost?: string;
  sale?: string;
}

export const CardProduct = ({
  image,
  name,
  star,
  price,
  cost,
  sale,
}: CardProductProps) => {
  return (
    <div className="font-santoshi mx-auto">
      <img src={image} alt="image-product" className="rounded-[20px]" />
      <h3 className="mt-4 mb-2 text-xl font-bold font-santoshi text-black">
        {name}
      </h3>
      <RatingView value={star} />
      <div className="flex items-center mt-2">
        <p className="text-2xl font-bold text-black mr-[10px] h-8">{price}</p>
        <p className="text-2xl font-bold text-black40 mr-3 h-8">
          <del>{cost}</del>
        </p>
        <p className="py-[6px] px-[14px] rounded-[62px] h-[28px] bg-errorLight text-error flex justify-center items-center text-xs font-santoshi font-medium max-w-[60px]">
          {sale}
        </p>
      </div>
    </div>
  );
};
