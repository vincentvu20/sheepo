import { Button } from '@mui/material';
import { Container } from '@/components';
import { CardProduct } from '@/components/CardProduct';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';
import { TitleSection } from '@/components/TitleSection';

export const NewArrivalSection = () => {
  return (
    <Container>
      <TitleSection
        name="NEW ARRIVALS"
        className="sm:mt-[72px] mt-[50px] sm:mb-[55px] mb-[32px] flex justify-center items-center"
      />
      <div className="flex md:flex-wrap flex-nowrap sm:gap-5 gap-4 pb-3 overflow-x-auto">
        {/* <div className="gap-5 card-product overflow-hidden sm:overflow-visible gri flex flex-row"> */}
        {LIST_CARD_PRODUCT.map((item, i) => (
          <CardProduct key={i} {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-9 leading-5">
        <Button
          variant="outlined"
          className="sm:w-[218px] w-full !bg-white h-[52px] !border-white10 !border !rounded-[62px]">
          View All
        </Button>
      </div>
      <div className="border-b sm:mt-[64px] mt-10" />
    </Container>
  );
};
