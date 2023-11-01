import { Button as MUIButton } from '@mui/material';
import { Container, Input } from '@/components';
import {
  ApplePayIcon,
  FacebookIcon,
  GitHubIcon,
  GooglePayIcon,
  InstagramIcon,
  MasterCardIcon,
  MessageIcon,
  PaypalIcon,
  TwitterIcon,
  VisaIcon,
} from '../icons';
import { listFooter } from './Footer.constants';

export const Footer = () => {
  return (
    <div className="bg-snowFlake">
      <Container>
        <div className="lg:flex justify-between items-center bg-black rounded-[20px] lg:py-0 py-5 sm:px-16 px-6 lg:h-[180px] mt-[-90px]">
          <h1 className="text-3xl sm:text-4xl text-white font-integralCF max-w-[551px] sm:mb-0 mb-8">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="lg:mt-0 mt-5">
            <Input
              renderLeadingIcon={<MessageIcon />}
              placeholder="Enter your email address"
              className="w-full"
              disableErrorMessage
            />
            <div className="mt-3">
              <MUIButton
                variant="contained"
                className="w-full h-[46px] !text-black !bg-white !rounded-[62px]">
                Subscribe to Newsletter
              </MUIButton>
            </div>
          </div>
        </div>

        <div className="mt-[50px]">
          <div className="lg:flex gap-[106px]">
            <div className="mt-[-10px] mb-[30px] sm:mb-[50px] w-full lg:max-w-[248px]">
              <h3 className="text-black font-integralCF text-[33.455px] font-bold">
                SHOP.CO
              </h3>
              <p className="mt-[25px] text-sm font-normal font-santoshi leading-[22px] text-black60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex sm:mt-[35px] mt-5 gap-3">
                <div className="w-7 h-7 rounded-[50%] bg-white hover:bg-black flex items-center justify-center cursor-pointer">
                  <TwitterIcon className="hover:text-white" />
                </div>
                <div className="w-7 h-7 rounded-[50%] bg-white flex items-center justify-center cursor-pointer">
                  <FacebookIcon />
                </div>
                <div className="w-7 h-7 rounded-[50%] bg-white flex items-center justify-center cursor-pointer">
                  <InstagramIcon />
                </div>
                <div className="w-7 h-7 rounded-[50%] bg-white flex items-center justify-center cursor-pointer">
                  <GitHubIcon />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-[50px] xl:gap-[96px] justify-between">
              {listFooter.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[149px] justify-between text-black">
                  <h3 className="text-base font-medium tracking-[3px]">
                    {item.title.name}
                  </h3>
                  <div className="flex flex-col sm:mt-[26px] max-h-[133px]">
                    {item.subTitle.length > 0
                      ? item.subTitle.map((item2, index2) => (
                          <p
                            key={index2}
                            className="text-black60 sm:pb-4 pb-2 font-santoshi">
                            {item2.name}
                          </p>
                        ))
                      : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:mt-0 md:mt-10 lg:mt-0 mt-10 border-t border-t-white10" />

        <div className="lg:flex justify-center items-center lg:justify-between mt-5 mb-[82px]">
          <p className="font-santoshi text-sm flex justify-center font-normal text-black60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex justify-center cursor-pointer">
            <VisaIcon />
            <MasterCardIcon />
            <PaypalIcon />
            <ApplePayIcon />
            <GooglePayIcon />
          </div>
        </div>
      </Container>
    </div>
  );
};
