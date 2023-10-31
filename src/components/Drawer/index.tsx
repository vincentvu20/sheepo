import { ReactNode } from 'react';
import { List } from '@mui/material';
import clsx from 'classnames';

interface DrawerProps {
  children: ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export const Drawer = ({ children, isOpen, toggle }: DrawerProps) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-[100] h-full transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out',
        isOpen
          ? 'translate-x-0 opacity-100 transition-opacity duration-300'
          : 'transition-translate translate-x-full opacity-0 delay-300',
      )}>
      <List className="relative h-full flex-col w-screen">{children}</List>
      <section
        className="h-full w-screen cursor-pointer"
        onClick={toggle}
        aria-label="Overlay"
        aria-hidden="true"
      />
    </div>
  );
};
