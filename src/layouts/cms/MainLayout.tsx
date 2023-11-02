import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  SwatchIcon,
  TagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ROUTES_CMS } from '@/common';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { logoutCms } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import Header from './Header';

const drawerWidth = 300;

const DrawerData = [
  {
    label: 'Users',
    icons: <UsersIcon height={24} width={24} color="black" />,
    path: ROUTES_CMS.USERS,
  },
  {
    label: 'Categories',
    icons: <TagIcon height={24} width={24} color="black" />,
    path: ROUTES_CMS.CATEGORIES,
  },
  {
    label: 'Attributes',
    icons: <SwatchIcon height={24} width={24} color="black" />,
    path: ROUTES_CMS.ATTRIBUTES,
  },
  {
    label: 'Products',
    icons: <ShoppingBagIcon height={24} width={24} color="black" />,
    path: ROUTES_CMS.PRODUCTS,
  },
  {
    label: 'Bookings',
    icons: <ShoppingCartIcon height={24} width={24} color="black" />,
    path: ROUTES_CMS.BOOKINGS,
  },
];

export const MainLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { accessTokenCms } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logoutCms());
    ModalServices.showMessageSuccess({ message: 'Logout successfully' });
  };

  const onRedirectProfile = () => {
    ModalServices.showMessageError({ message: 'Comming soon!' });
  };

  const handleRedirect = (path: string, index: number) => {
    return () => {
      setSelectedIndex(index);
      navigate(path);
    };
  };

  const setInitSelectedTab = useCallback(() => {
    const listPath = DrawerData.map(item => item.path);
    const defaultIdx = listPath.findIndex(i => location.href.includes(i));

    setSelectedIndex(defaultIdx);
  }, []);

  const checkLogged = useCallback(() => {
    if (!accessTokenCms) {
      navigate(ROUTES_CMS.LOGIN, { replace: true });
    }
  }, [accessTokenCms, navigate]);

  // effect
  useEffect(() => {
    checkLogged();
  }, [checkLogged]);

  useEffect(() => {
    setInitSelectedTab();
  }, [setInitSelectedTab]);

  // render
  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="/cms"
          sx={{
            fontSize: 32,
          }}>
          SHOP.CO
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ marginTop: 2 }}>
        {DrawerData.map((data, idx) => (
          <ListItem key={data.label} disablePadding>
            <ListItemButton
              selected={selectedIndex === idx}
              onClick={handleRedirect(data.path, idx)}>
              <ListItemIcon>{data.icons}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontWeight: 500 },
                  variant: 'body2',
                }}
                primary={data.label}
              />
              {/* <ChevronRightIcon height={16} width={16} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
        }}>
        <Box
          component="nav"
          sx={{
            width: drawerWidth,
            maxWidth: drawerWidth,
            flexShrink: 0,
          }}
          aria-label="dashboard-menu">
          <Drawer
            variant="permanent"
            sx={{
              display: 'block',
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            position: 'relative',
          }}>
          <Header width="100%" {...{ onLogout, onRedirectProfile }} />
          <Box sx={{ padding: 4 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
