import { Navigate } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/404';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/auth/Login';
import Invitation from '../pages/invitation';
import EditInvitation from '../pages/invitation/EditInvitation';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/dashboard'} replace />,
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
        path: '/invitation/:id',
        element: <EditInvitation />,
      },
      {
        path: '/invitation/create',
        element: <Invitation />,
      },
    ],
  },
];

export default routes;
