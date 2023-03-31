import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  ButtonGroup,
  Container,
  Modal,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/auth/authApi';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '1px solid #cecece',
  boxShadow: 24,
  p: 4,
};

export const LoginPage = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = evt => {
    evt.preventDefault();
    console.dir(evt.target.elements);

    const { email, password } = evt.target.elements;

    dispatch(
      authLogin({
        email: email.value,
        password: password.value,
      })
    );
    navigate('/', { replace: true });
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <div>
      <Modal
        component="form"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        //onClose={handleClose}
        onSubmit={handleSubmitForm}
      >
        <Box sx={style}>
          <Typography
            id="auth-title"
            variant="h6"
            component="h3"
            sx={{ margin: '0 auto', textAlign: 'center', marginBottom: '20px' }}
          >
            Please log in
          </Typography>

          <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <TextField
              required
              id="email"
              label="Email"
              size="small"
              //defaultValue="Hello World"
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              size="small"
              //autoComplete="current-password"
            />
            <ButtonGroup>
              <Button type="submit">Submit</Button>
              <Button type="close" onClick={handleClose}>
                Cancel
              </Button>
            </ButtonGroup>
          </Container>
        </Box>
      </Modal>
    </div>

    ////////////////////////////////
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <div>
    //     <TextField
    //       id="email-input"
    //       label="Email"
    //       type="email"
    //       autoComplete="current-email"
    //       size="small"
    //     />
    //     <TextField
    //       id="password-input"
    //       label="Password"
    //       type="password"
    //       autoComplete="current-password"
    //       size="small"
    //     />
    //   </div>
    // </Box>
  );
};
