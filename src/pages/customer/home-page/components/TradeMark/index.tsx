import { Container } from '@/components';
import { CalvinKlein, Gucci, Prada, Versace, Zara } from '@/components/icons';

export const TradeMarkSection = () => {
  return (
    <div className="bg-black h-[122px]">
      <Container>
        <div className="flex flex-wrap items-center h-full mt-[30px] xl:mt-[45px] justify-between">
          <Versace />
          <Zara />
          <Gucci />
          <Prada />
          <CalvinKlein />
        </div>
      </Container>
    </div>
  );
};
