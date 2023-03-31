import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { authLogout } from 'store/auth/authApi';
import LogoutIcon from '@mui/icons-material/Logout';
export const UserMenu = () => {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(authLogout());
  };
  return (
    <>
      <List>
        <ListItem key="Logout" disablePadding>
          <ListItemButton onClick={handlerLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </>
  );
};
