import { ActiveIcon, RatingView } from '@/components';

interface RatingCardProps {
  star: number;
  name: string;
  description: string;
  createdAt: Date;
}

export const RatingCard = ({
  star,
  name,
  description,
  createdAt,
}: RatingCardProps) => {
  return (
    <div className="px-8 py-7 rounded-[20px] border border-white10 font-santoshi max-w-[610px]">
      <RatingView value={star} />
      <div className="flex mt-[15px]">
        <h6 className="text-xl font-bold leading-[22px] text-black mr-1">
          {name}
        </h6>
        <ActiveIcon />
      </div>
      <p className="text-black60 text-base font-normal leading-[22px] mt-3 max-w-[522px]">
        {description}
      </p>
      <p className="text-black60 text-base font-normal leading-[22px] mt-3 max-w-[336px]">
        Posted on {createdAt.toDateString()}
      </p>
    </div>
  );
};
