import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Collapse = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(!show);
  const Items = () => {
    return (
      <li className="flex items-center justify-between my-2">
        <KeyboardArrowRightIcon />
      </li>
    );
  };
  return (
    <div className="border w-28 mt-2 p-2">
      <button
        className="flex items-center justify-between w-full  "
        onClick={handleShow}>
        Collapse {!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>
      {show === true && (
        <ul>
          <Items />
          <Items />
          <Items />
          <Items />
        </ul>
      )}
    </div>
  );
};
