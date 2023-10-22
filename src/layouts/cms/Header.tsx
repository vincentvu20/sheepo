import * as React from 'react';
import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@/hooks/common-hook';

function Header({ onLogout, onRedirectProfile, ...other }: any) {
  const { colors } = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    onLogout?.();
    setAnchorElUser(null);
  };

  const handleRedirectProfile = () => {
    onRedirectProfile?.();
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ borderBottomWidth: 1 }}
      {...other}>
      <Container
        sx={{
          backgroundColor: colors.white,
          color: colors.black,
          display: 'flex',
          justifyContent: 'flex-end',
          minWidth: '100%',
        }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Box display="flex">
                <div className="flex flex-col items-end justify-center">
                  <Typography variant="body2">Super Admin</Typography>
                  <Typography variant="subtitle1">
                    super_admin@sheepo.com
                  </Typography>
                </div>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, marginLeft: 2 }}>
                  <UserCircleIcon height={60} width={60} />
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleRedirectProfile}>
                <UserIcon height={20} width={20} />
                <Typography marginLeft={1} textAlign="center">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ArrowLeftOnRectangleIcon height={20} width={20} />
                <Typography marginLeft={1} textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
