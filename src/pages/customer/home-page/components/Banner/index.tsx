import { Button } from '@/components';
import { Container } from '@/components';
import { LIST_POINT } from './components/__mocks__/data';
import { ListPoint } from './components/ListPoint';

export const BannerSection = () => {
  return (
    <div className="bg-snowFlake">
      <Container>
        <div className="lg:flex justify-center items-center">
          <div>
            <h1 className="text-black font-bold  text-3xl sm:mt-0 mt-10 sm:text-[64px] font-integralCF max-w-[577px] sm:leading-[64px] leading-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="max-w-[545px] font-normal font-santoshi text-black60 leading-[22px] mt-5 sm:mt-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="mt-8">
              <Button className="sm:w-[210px] w-full sm:mt-8 mt-6 !rounded-[62px]">
                Shop Now
              </Button>
            </div>
            <div className="justify-center flex flex-wrap gap-4 leading-[74px] mt-8">
              {LIST_POINT.map((item, i) => {
                if (item.point == '0' || item.point == '1') {
                  return (
                    <div>
                      <div className="flex h-full w-[5px] items-center justify-center sm:border-l sm:border-l-black10 leading-5" />
                    </div>
                  );
                }
                if (item.point == '0') {
                  return (
                    <div>
                      <div className="flex h-full w-[5px] items-center justify-center border-l border-l-black leading-5" />
                    </div>
                  );
                }
                return <ListPoint key={i} {...item} />;
              })}
            </div>
          </div>
          <div>
            <img
              src="banner-hompage.png"
              alt="banner-homepage"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
