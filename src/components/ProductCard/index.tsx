import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { RatingView } from '../Rating';

interface ProductCardProps {
  image: string;
  name: string;
  star: number;
  price: string;
  cost?: string;
  sale?: string;
}

export const ProductCard = ({
  image,
  name,
  star,
  price,
  cost,
  sale,
}: ProductCardProps) => {
  return (
    <Card>
      <CardMedia image={image} />
      <CardContent>
        <Typography variant="h3">{name}</Typography>
        <RatingView value={star} />
        <div className="flex items-center mt-2 gap-[10px]">
          <Typography variant="body2">{price}</Typography>
          <Typography variant="body1">{cost}</Typography>
          <Typography variant="body1">{sale}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
