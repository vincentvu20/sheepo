import { ReactNode, useState } from 'react';
import { Menu } from '@headlessui/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import clsx from 'classnames';

interface ICollapse {
  children: ReactNode;
  title: string;
  className?: string;
}

export const Collapse = ({ className, title, children }: ICollapse) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(!show);
  return (
    <Menu>
      <div
        className={clsx(
          'flex items-center justify-between w-full p-1 ',
          className,
        )}
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
