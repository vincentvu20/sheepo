import { ChangeHandler } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  MenuItem,
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from '@mui/material';

export interface IMenuItem {
  itemValue: number;
  itemLabel: string;
}
export interface SelectProps extends MUISelectProps {
  items: IMenuItem[];
  className?: string;
  handleChange?: ChangeHandler;
  defaultLabel?: string;
}

export const Select = ({
  items,
  handleChange,
  defaultLabel,
  sx,
  ...others
}: SelectProps) => {
  const menuItems = () =>
    items.map(item => {
      const menuLabel = item.itemLabel;
      const menuValue = item.itemValue;
      return (
        <MenuItem key={menuLabel} value={menuValue}>
          {menuLabel}
        </MenuItem>
      );
    });

  return (
    <MUISelect
      id="select"
      value={defaultLabel}
      onChange={handleChange}
      IconComponent={ExpandMoreIcon}
      sx={{
        backgroundColor: '#F0F0F0',
        color: '#000000',
        border: 0,
        borderRadius: '62px',
        '&:before': {
          borderBottom: '0px',
        },
        '&:after': {
          borderBottom: '0px',
        },
        textAlign: 'center',
        padding: 0,
        minWidth: 150,
        ...sx,
      }}
      {...others}>
      {menuItems()}
    </MUISelect>
  );
};
