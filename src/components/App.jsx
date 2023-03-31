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

  return <RouterProvider router={router} />;
};
