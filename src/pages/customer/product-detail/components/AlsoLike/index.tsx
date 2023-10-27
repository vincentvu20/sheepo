import { CardProduct, Container, TitleSection } from '@/components';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';

export const AlsoLikeSection = () => {
  return (
    <Container className="mb-20">
      <TitleSection
        name="You Might Also Like"
        className="mt-[72px] mb-[55px] flex justify-center items-center"
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[55px]">
        {LIST_CARD_PRODUCT.map((item, i) => (
          <CardProduct key={i} {...item} />
        ))}
      </div>
    </Container>
  );
};
