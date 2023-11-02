import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container, Input } from '@/components';
import { useToggle } from '@/hooks/useToggle';
import { Drawer } from '../Drawer';
import { CloseIcon, SearchIcon } from '../icons';
import { MenuMobileIcon } from '../icons/MenuMobileIcon';

export const Header = () => {
  const [open, toggle] = useToggle();
  const [search, setSearch] = useState('');

  const handleClearSearch = () => {
    if (!search) {
      return;
    }
    setSearch('');
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-between w-full gap-10 py-6 ">
          <div className="flex">
            <div className="flex items-center justify-center mr-4">
              <MenuMobileIcon className="lg:hidden block" />
            </div>
            <h3 className="text-black text-3xl font-bold font-integralCF">
              SHOP.CO
            </h3>
          </div>
          <div className="lg:block hidden">
            <ul className="flex gap-6 max-w-[321px]">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">On Sale</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden w-[545px]">
            <Input
              className=""
              renderLeadingIcon={<SearchIcon />}
              value={search}
              // onInput={(val: string) => {
              //   setSearch(val);
              // }}
              endIcon={search ? <CloseIcon /> : <SearchIcon />}
              onClickIconEnd={handleClearSearch}
              placeholder="Search for products..."
              disableErrorMessage
            />
          </div>
          <div className="flex">
            <div className="flex justify-center items-center text-black mr-3 lg:hidden">
              <SearchIcon fillOpacity={1} />
            </div>
            <ShoppingCartOutlinedIcon className="mr-3" />
            <AccountCircleOutlinedIcon />
          </div>
        </div>
      </Container>
      <Drawer isOpen={open} toggle={toggle}>
        <p>Shop</p>
      </Drawer>
    </>
  );
};
