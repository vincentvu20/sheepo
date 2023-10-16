import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container } from '@/components';

export const Header = () => {
  return (
    <Container>
      <div className="h-12 flex items-center justify-between">
        <div>
          <h3 className="text-black text-3xl font-bold font-integralCF">
            SHOP.CO
          </h3>
        </div>
        <div>
          <ShoppingCartOutlinedIcon className="mr-[14px]" />
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </Container>
  );
};
