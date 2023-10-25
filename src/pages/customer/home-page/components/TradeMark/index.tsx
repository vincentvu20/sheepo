import { Container } from '@/components';
import { CalvinKlein, Gucci, Prada, Versace, Zara } from '@/components/icons';

export const TradeMarkSection = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="flex flex-wrap items-center justify-center lg:gap-0 gap-5 h-full lg:justify-between py-5 sm:py-[45px]">
          <Versace className="mt-0 sm:mb-3" />
          <Zara className="mt-0 sm:mb-3" />
          <Gucci className="mt-0 sm:mb-3" />
          <Prada className="mt-3 sm:mt-0" />
          <CalvinKlein className="mt-3 sm:mt-0" />
        </div>
      </Container>
    </div>
  );
};
