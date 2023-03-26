import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/api';
import { getError, getIsLoading } from 'store/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <Section title={'Phonebook'} children={<FormContact />} />

      <Section title={'Contacts'}>
        <Firter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ListContacts />
      </Section>
    </div>
  );
};
