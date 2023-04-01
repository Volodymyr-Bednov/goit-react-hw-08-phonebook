import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { authCurrent } from 'store/auth/authApi';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCurrent());
  }, [dispatch]);

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

  return <RouterProvider router={router} />;
};
