import { useState } from 'react';
import { Box } from '@mui/material';
import { Button, Container, Select, TabPanel, Tabs } from '@/components';
import { WriteReview } from '../WriteReview';
import { LIST_CARD_RATING } from './__mocks__/data';
import { RatingCard } from './RatingCard';

const allReviewMock = 50;

export const RatingSection = () => {
  const [valueTab, setValueTab] = useState(1);
  const [cardRatingValue, setCardRatingValue] = useState(LIST_CARD_RATING);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const handleLoadMoreRating = () => {
    setCardRatingValue(cardRatingValue.concat(LIST_CARD_RATING));
  };

  const [showReview, setShowReview] = useState<boolean>(false);

  const tabItems = ['Product Details', 'Rating & Reviews', 'FAQs'];
  return (
    <Container className="mt-10">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          items={['Product Details', 'Rating & Reviews', 'FAQs']}
          value={valueTab}
          onChange={handleChange}
        />
      </Box>
      {tabItems.map((item, index) => {
        if (item === 'Rating & Reviews') {
          return (
            <TabPanel index={index} value={valueTab}>
              <div className="flex">
                <div className="flex items-center gap-2 grow-[2]">
                  <h1 className="font-bold text-2xl">All Reviews</h1>
                  <h1 className="text-base text-black60">({allReviewMock})</h1>
                </div>
                <div className="flex items-center gap-2 grow-[8] justify-end">
                  <Select
                    items={[
                      {
                        itemValue: 0,
                        itemLabel: 'Lastest',
                      },
                    ]}></Select>
                  <Button
                    variant="rounded-contained"
                    sx={{
                      paddingX: 5,
                    }}
                    onClick={() => setShowReview(true)}>
                    Write a Review
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-9">
                {cardRatingValue.map((item, i) => (
                  <RatingCard key={i} {...item} />
                ))}
              </div>
              <div className="flex justify-center items-center mt-9 leading-5">
                {cardRatingValue.length > 6 &&
                  cardRatingValue.length < allReviewMock && (
                    <Button
                      variant="rounded-outlined"
                      className="w-[218px] !bg-white h-[52px] !border-white10 !border !rounded-[62px]"
                      sx={{
                        fontWeight: 'bold',
                      }}
                      onClick={handleLoadMoreRating}>
                      Load More Reviews
                    </Button>
                  )}
              </div>
              <WriteReview
                isOpen={showReview}
                onClose={() => setShowReview(false)}
                star={4}
              />
            </TabPanel>
          );
        }
      })}
    </Container>
  );
};
