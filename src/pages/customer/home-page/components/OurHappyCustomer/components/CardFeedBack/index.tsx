import { Card, CardContent, Typography } from '@mui/material';
import { ActiveIcon } from '@/components/icons';
import { RatingView } from '@/components/Rating';

interface FeedBackCardProps {
  star: number;
  name: string;
  description: string;
}

export const FeedBackCard = ({
  star,
  name,
  description,
}: FeedBackCardProps) => {
  return (
    <div className="px-8 py-7 rounded-[20px] border border-white10 font-santoshi max-w-[400px]">
      <RatingView value={star} />
      <div className="flex mt-[15px]">
        <h6 className="text-xl font-bold leading-[22px] text-black mr-1">
          {name}
        </h6>
        <ActiveIcon />
      </div>
      <p className="text-black60 text-base font-normal leading-[22px] mt-3 max-w-[336px]">
        {description}
      </p>
    </div>
    // <Card sx={{ maxWidth: 400, height: 240 }}>
    //   <CardContent>
    //     <RatingView value={star} />
    //     <div className="flex">
    //       <Typography variant="body2">{name}</Typography>
    //       <ActiveIcon />
    //     </div>
    //     <Typography
    //       variant="subtitle1"
    //       sx={{ marginTop: '12px' }}
    //       color="text.secondary">
    //       {description}
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
};
