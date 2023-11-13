import { Button } from '@mui/material';
import { Container } from '@/components';
import { CardProduct } from '@/components/CardProduct';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';
import { TitleSection } from '@/components/TitleSection';

export const TopSellingSection = () => {
  return (
    <Container>
      <TitleSection
        name="top selling"
        className="sm:mt-[72px] mt-10 sm:mb-[55px] mb-[32px] flex justify-center items-center"
      />
      <div className="flex md:flex-wrap flex-nowrap sm:gap-5 gap-4 pb-3 overflow-x-auto">
        {LIST_CARD_PRODUCT.map((item, i) => (
          <CardProduct key={i} {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-9 mb-[80px] leading-5">
        <Button
          variant="outlined"
          className="sm:w-[218px] w-full !bg-white h-[52px] !border-white10 !border !rounded-[62px]">
          View All
        </Button>
      </div>
    </Container>
  );
};
