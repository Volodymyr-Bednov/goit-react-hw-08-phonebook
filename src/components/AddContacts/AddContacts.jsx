import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
//import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/api';
import { getContacts } from 'store/contacts/selectors';

export const AddContacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContactHandlerr = evt => {
    evt.preventDefault();
    console.log(evt);
    const { name, number } = evt.target.elements;
    const nameValue = name.value;
    const numbervalue = number.value;
    if (!nameValue || !numbervalue) return;
    if (contacts) {
      const nameMatch = contacts.filter(item =>
        item.name.toLowerCase().includes(nameValue.toLowerCase())
      );

      if (nameMatch.length) return alert(`${nameValue} is already in contacts`);
    }
    dispatch(addContact({ name: nameValue, number: numbervalue }));
    evt.target.reset();
  };
  return (
    //<Box sx={{ justifyContent: 'center' }}>
    <List>
      <ListItem key="addContact" disablePadding>
        <Container
          sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
          <form onSubmit={addContactHandlerr}>
            <Typography
              id="auth-title"
              variant="h6"
              component="h3"
              sx={{
                margin: '0 auto',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Add new contact
            </Typography>

            <Container
              disableGutters
              sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <TextField
                required
                id="name"
                label="Name"
                size="small"
                fullWidth="true"
                //defaultValue="Hello World"
              />
              <TextField
                required
                id="number"
                label="Number"
                size="small"
                fullWidth="true"
                //defaultValue="Hello World"
              />

              <ButtonGroup id="btn-add">
                <Button type="submit" sx={{ justifyContent: 'center' }}>
                  Add contact
                </Button>
              </ButtonGroup>
            </Container>
          </form>
        </Container>
      </ListItem>
    </List>
    //</Box>
  );
};
