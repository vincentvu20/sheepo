import { Input } from '@mui/material';
import { Button as MUIButton } from '@mui/material';
import { Container } from '@/components';
import { listFooter } from './Footer.constants';

export const Footer = () => {
  return (
    <div className="bg-snowFlake">
      <Container>
        <div className="md:flex justify-between items-center bg-black rounded-[20px] px-16  lg:h-[180px] lg:mt-[-90px]">
          <h1 className="text-4xl text-white font-integralCF max-w-[551px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="">
            <Input
              className="bg-white w-[349px] h-[46px] pl-10 rounded-[62px]"
              placeholder="Enter your email address"
            />
            {/* <Button className="bg-white"></Button> */}
            <div className="mt-3">
              <MUIButton
                variant="contained"
                className="w-[349px] h-[46px] !text-black !bg-white !rounded-[62px]"
              >
                Subscribe to Newsletter
              </MUIButton>
            </div>
          </div>
        </div>

        <div className="mt-[50px]">
          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 ">
            <div className="top-0">
              <h3 className="text-black font-integralCF text-[33.455px] font-bold">
                SHOP.CO
              </h3>
              <p className="mt-[25px] text-sm font-normal font-santoshi leading-[22px] text-black60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="mt-[35px]"></div>
            </div>
            {listFooter.map((item, index) => (
              <div
                key={index}
                className="max-w-[149px] justify-center text-black"
              >
                <h3 className="text-base font-medium tracking-[3px]">
                  {item.title.name}
                </h3>
                <div className="flex flex-col mt-[26px] max-h-[133px]">
                  {item.subTitle.length > 0
                    ? item.subTitle.map((item2, index2) => (
                        <p key={index2} className="text-black60 font-santoshi">
                          {item2.name}
                        </p>
                      ))
                    : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
