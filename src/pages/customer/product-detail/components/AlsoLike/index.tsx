import { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardProduct, Container, TitleSection } from '@/components';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';

export const AlsoLikeSection = () => {
  return (
    <Container className="mb-20">
      <TitleSection
        name="You Might Also Like"
        className="mt-10 mb-20 flex justify-center items-center"
      />

      <div className="w-full mb-10">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1.2,
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
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          modules={[Pagination, Scrollbar, Navigation, FreeMode]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          {LIST_CARD_PRODUCT.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col">
                <CardProduct key={i} {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
