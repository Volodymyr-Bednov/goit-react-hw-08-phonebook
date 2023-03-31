// import { Section } from './Section/Section';
// import { FormContact } from './FormContact/FormContact';
// import { ListContacts } from './ListContacts/ListContacts';
// import { Firter } from './Filter/Filter';

// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'store/api';
// import { getError, getIsLoading } from 'store/contacts/selectors';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/registration',
            element: <RegisterPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/contacts',
            element: <ContactsPage />,
          },
        ],
      },
    ],
    { basename: '/goit-react-hw-08-phonebook' }
  );

  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <RouterProvider router={router} />
    // <div className={css.wrap}>
    //   <HomePage />
    //   {/* <Section title={'Phonebook'} children={<FormContact />} />

    //   <Section title={'Contacts'}>
    //     <Firter />
    //     {isLoading && !error && <b>Request in progress...</b>}
    //     <ListContacts />
    //   </Section> */}
    // </div>
  );
};
