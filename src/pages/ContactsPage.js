import { ItemContact } from 'components/ListContacts/ItemContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/api';
import { getContacts } from 'store/contacts/selectors';
import { searchKey } from 'store/filter/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  //   const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contacts = useSelector(getContacts);
  console.log('contactsPage', contacts);
  const filter = useSelector(searchKey);
  const getFilteredContacts = (contacts, filter = '') => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(item => (
          <ItemContact key={item.id} dataItem={item} />
        ))}
    </ul>
  );
};
