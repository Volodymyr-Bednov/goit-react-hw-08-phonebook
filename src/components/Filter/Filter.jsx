import { useDispatch, useSelector } from 'react-redux';
import { filtContacts } from 'store/filter/actionCreators';
import { searchKey } from 'store/filter/selectors';
import {
  Container,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';

export const Firter = () => {
  const filter = useSelector(searchKey);
  const dispatch = useDispatch();

  const filterChahge = evt => {
    dispatch(filtContacts(evt.target.value));
  };
  return (
    <List>
      <ListItem key="filter-item" disablePadding>
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            id="filter-title"
            variant="h6"
            component="h3"
            sx={{
              margin: '0 auto',
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '16px',
            }}
          >
            Find contacts by name
          </Typography>
          <TextField
            required
            value={filter}
            name="filter"
            onChange={filterChahge}
            id="filter"
            label="Find"
            size="small"
            fullWidth="true"
          />
        </Container>
      </ListItem>
    </List>
  );
};
