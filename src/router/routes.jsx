import App from '../App';
import NotFound from '../pages/404';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Invitation from '../pages/invitation';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/invitation',
        element: <Invitation />,
      },
      {
        path: '/invitation/create',
        element: <Invitation />,
      },
    ],
  },
];

export default routes;
