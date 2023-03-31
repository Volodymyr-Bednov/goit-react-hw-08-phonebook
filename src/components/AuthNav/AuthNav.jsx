import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  const navigate = useNavigate();

  const handlerClickMenu = buttonName => {
    console.log(buttonName.toLowerCase());
    navigate(`/${buttonName.toLowerCase()}`);
  };
  return (
    <>
      <List>
        {['Registration', 'Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handlerClickMenu(text);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AppRegistrationIcon /> : <LoginIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
