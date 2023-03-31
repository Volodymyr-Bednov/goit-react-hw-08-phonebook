import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemIcon,
  //ListItemIcon,
  // ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { AddContacts } from 'components/AddContacts/AddContacts';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Firter } from 'components/Filter/Filter';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getIsLoggedIn, getUserName } from 'store/auth/authSelectors';

const drawerWidth = 340;
export const HomePage = () => {
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  // const handlerClickMenu = buttonName => {
  //   console.log(buttonName.toLowerCase());
  //   navigate(`/${buttonName.toLowerCase()}`);

  // };

  useEffect(() => {
    isLoggedIn ? navigate('/contacts') : navigate('/');
    console.log(isLoggedIn ? navigate('/contacts') : navigate('/'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          mr: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h1" fontSize="22px" noWrap>
            Phonebook
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar>
          <Box sx={{ padding: '12px', textAlign: 'center' }}>
            <Typography
              id="filter-title"
              variant="h6"
              component="h3"
              sx={{
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              {' '}
              Hi! {isLoggedIn ? userName : 'You not regester'}
            </Typography>

            {/* <Typography paragraph fontSize={14}>
              Hi! {isLoggedIn ? userName : 'You not regester'}
            </Typography> */}
          </Box>
        </Toolbar>
        <Divider />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Divider />
        {isLoggedIn && <AddContacts />}
        <Divider />
        {isLoggedIn && <Firter />}
        <Toolbar />
      </Drawer>
    </Box>
  );
};
