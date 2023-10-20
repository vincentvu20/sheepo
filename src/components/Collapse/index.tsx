import { ReactNode, useState } from 'react';
import { Menu } from '@headlessui/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ICollapse {
  children: ReactNode;
  title: string;
}

export const Collapse = ({ title, children }: ICollapse) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(!show);
  return (
    <Menu>
      <div
        className="flex items-center justify-between w-full border-b p-1"
        onClick={handleShow}>
        {title}
        {!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </div>
      <div
        className="collapse-body py-2"
        style={{ display: show ? 'block' : 'none' }}>
        {children}
      </div>
    </Menu>
  );
};
