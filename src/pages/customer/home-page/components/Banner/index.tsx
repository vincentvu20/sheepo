// import { Button } from '@mui/material';
import { Container } from '@/components';

export const BannerSection = () => {
  return (
    <div className="bg-snowFlake">
      <Container>
        <div className="">
          <div>
            <img
              src="banner-hompage.png"
              alt="banner-homepage"
              className="relative"
            />
          </div>
          {/* <div>
            <h1 className="text-black font-bold text-[64px] font-integralCF max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="max-w-[545px] font-normal font-santoshi text-black60 leading-[22px] mt-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button variant="contained" className="w-[210px] !rounded-[62px]">
              Shop Now
            </Button>
          </div> */}
        </div>
      </Container>
    </div>
  );
};
