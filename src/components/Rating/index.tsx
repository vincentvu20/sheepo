import Rating, { RatingProps } from '@mui/material/Rating';
import { Box } from '@mui/system';

interface RatingViewProps extends RatingProps {
  value: number;
}

const labels: { [index: string]: string } = {
  0.5: '0.5/',
  1: '1.0/',
  1.5: '1.5/',
  2: '2.0/',
  2.5: '2.5/',
  3: '3.0/',
  3.5: '3.5/',
  4: '4.0/',
  4.5: '4.5/',
  5: '5.0/',
};

export const RatingView = ({ value }: RatingViewProps) => {
  const MAX_POINT = 5;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <Rating value={value} precision={0.5} />
      {value !== null && (
        <Box sx={{ ml: 1 }}>
          <div className="flex font-normal text-sm">
            <p className=" text-black">
              {labels[value !== -1 ? value : '0.0/5']}
            </p>
            <p className="text-black60">{MAX_POINT}</p>
          </div>
        </Box>
      )}
    </Box>
  );
};
