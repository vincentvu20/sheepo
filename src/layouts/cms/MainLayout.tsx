import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  ChevronRightIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import AdbIcon from '@mui/icons-material/Adb';
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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

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

export const MainLayout = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { accessTokenCms } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    dispatch(logoutCms());
    ModalServices.showMessageSuccess({ message: 'Logout successfully' });
  };

  const onRedirectProfile = () => {
    ModalServices.showMessageError({ message: 'Comming soon!' });
  };

  const handleRedirect = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const checkLogged = useCallback(() => {
    if (!accessTokenCms) {
      navigate(ROUTES_CMS.LOGIN, { replace: true });
    }
  }, [accessTokenCms, navigate]);

  // effect
  useEffect(() => {
    checkLogged();
  }, [checkLogged]);

  // render
  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AdbIcon
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          color="primary"
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/cms"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          LOGO
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ marginTop: 2 }}>
        {DrawerData.map(data => (
          <ListItem key={data.label} disablePadding>
            <ListItemButton onClick={handleRedirect(data.path)}>
              <ListItemIcon>{data.icons}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ style: { fontWeight: 500 } }}
                primary={data.label}
              />
              <ChevronRightIcon height={16} width={16} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            width: { sm: drawerWidth },
            maxWidth: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="dashboard-menu">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
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
