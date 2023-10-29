import { useRef } from 'react';
import 'swiper/css';
import { Container } from '@mui/material';
import { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowDownBold1, ArrowDownBold2 } from '@/components/icons';
import { TitleSection } from '@/components/TitleSection';
import { FEEDBACK_LIST } from '../Banner/components/__mocks__/data';
import { FeedBackCard } from './components/CardFeedBack';

export const OurHappyCustomer = () => {
  const swiperRef = useRef(null);

  return (
    <div className="h-[500px]">
      <Container>
        <div className="flex justify-between mt-20">
          <TitleSection
            name="OUR HAPPY CUSTOMERS"
            className="flex justify-start sm:text-5xl text-3xl"
          />
          <div className="flex items-end justify-end">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="mr-4">
              <ArrowDownBold2 />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <ArrowDownBold1 />
            </button>
          </div>
        </div>
        <div className="w-400px mt-10">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4.35,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            modules={[Pagination, Scrollbar, Navigation, FreeMode]}
            spaceBetween={20}
            slidesPerView={1}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
            {FEEDBACK_LIST.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col">
                  <FeedBackCard
                    star={item.star}
                    name={item.name}
                    description={item.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
