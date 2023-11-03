import React from 'react';
import { Box } from '@mui/material';
import { Button, Container, Select, TabPanel, Tabs } from '@/components';
import { LIST_CARD_RATING } from './__mocks__/data';
import { RatingCard } from './RatingCard';

export const RatingSection = () => {
  const [valueTab, setValueTab] = React.useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

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
                  <h1 className="text-base text-black60">(451)</h1>
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
                      textTransform: 'none',
                      paddingX: 5,
                    }}>
                    Write a Review
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center mt-9 mb-10 leading-5">
                Rating Product Here
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                {LIST_CARD_RATING.map((item, i) => (
                  <RatingCard key={i} {...item} />
                ))}
              </div>
              <div className="flex justify-center items-center mt-9 leading-5">
                <Button
                  variant="rounded-outlined"
                  className="w-[218px] !bg-white h-[52px] !border-white10 !border !rounded-[62px]"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}>
                  Load More Reviews
                </Button>
              </div>
            </TabPanel>
          );
        }
      })}
    </Container>
  );
};
