import { Button, Container, Tabs } from '@/components';

export const RatingSection = () => {
  return (
    <Container className="mt-10">
      <Tabs />
      <div className="flex justify-center items-center mt-9 mb-[80px] leading-5">
        <Button
          variant="rounded-outlined"
          className="w-[218px] !bg-white h-[52px] !border-white10 !border !rounded-[62px]"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}>
          Load More Reviews
        </Button>
      </div>
    </Container>
  );
};
