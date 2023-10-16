import {
  BannerSection,
  BrowseByDressStyleSection,
  NewArrivalSection,
  OurHappyCustomer,
  TopSellingSection,
  TradeMarkSection,
} from './components';

export const HomePage = () => {
  return (
    <>
      <BannerSection />
      <TradeMarkSection />
      <NewArrivalSection />
      <TopSellingSection />
      <BrowseByDressStyleSection />
      <OurHappyCustomer />
    </>
  );
};
