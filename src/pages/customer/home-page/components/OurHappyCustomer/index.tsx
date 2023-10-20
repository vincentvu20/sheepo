import { Container } from '@mui/material';
import { TitleSection } from '@/components/TitleSection';

export const OurHappyCustomer = () => {
  return (
    <div className="h-[500px]">
      <Container>
        <TitleSection
          name="OUR HAPPY CUSTOMERS"
          className="flex justify-start"
        />
      </Container>
    </div>
  );
};
