import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { Button as MUIButton } from '@mui/material';
import { CartIcon } from '@/assets';
import { Button, Container, Dropdown } from '@/components';
import { useTheme } from '@/hooks/common-hook';
import { ModalServices } from '@/services/modal-service';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <Container>
      <Button
        className="!w-[350px] !bg-black"
        onClick={() => {
          ModalServices.showConfirmModal({
            message: 'Modal test',
            onConfirm: () => {},
            onCancel: () => {},
          });
        }}>
        Test modal
      </Button>
      <Button
        className="!w-[200px] !my-5"
        onClick={() => {
          ModalServices.showMessageSuccess({
            message: 'Successfully',
          });
        }}>
        Test toast success
      </Button>

      <Button
        variant="rounded-outlined"
        className="w-[180px]"
        onClick={() => {
          ModalServices.showMessageError({
            message: 'Failure',
          });
        }}>
        Test toast error
      </Button>

      <MUIButton variant="contained" className="w-[200px]">
        Test Button MUI
      </MUIButton>

      <MUIButton variant="contained" className="w-[200px]" color="info">
        Test Button MUI
      </MUIButton>

      <CartIcon color={theme.colors.skyBlue} />
      <p className="font-santoshi font-normal text-black60">Test font</p>
      <p className="font-bold text-black font-integralCF text-[40px]">
        One Life Graphic T-shirt
      </p>
      <Dropdown
        className="!w-[200px]"
        containerClass="w-[100px]"
        options={[
          {
            label: 'Your profile',
            action: () => {},
            icon: <AcademicCapIcon />,
          },
          { label: 'Sign out', action: () => {} },
        ]}
        label="Options"
      />
    </Container>
  );
};
