import {
  Tab as MUITab,
  Tabs as MUITabs,
  TabsProps as MUITabsProps,
} from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface TabsProps extends MUITabsProps {
  items: string[];
  value: number;
}

export const Tabs = ({ items, onChange, value, ...others }: TabsProps) => {
  return (
    <MUITabs
      value={value}
      onChange={onChange}
      aria-label="basic tabs example"
      variant="fullWidth"
      centered
      {...others}>
      {items.map((item, index) => {
        return (
          <MUITab
            sx={{
              textTransform: 'none',
            }}
            label={item}
            {...a11yProps(index)}
          />
        );
      })}
    </MUITabs>
  );
};
