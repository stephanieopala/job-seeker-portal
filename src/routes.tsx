/* eslint-disable react/display-name */
import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import AuthGuard from './components/guards/AuthGuard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

// UNAUTHENTICATED
const Home = Loadable(lazy(() => import('./pages/Home')));
const Login = Loadable(lazy(() => import('./pages/Login')));
const Register = Loadable(lazy(() => import('./pages/Register')));
const Jobs = Loadable(lazy(() => import('./pages/Jobs')));

const DashboardLayout = Loadable(lazy(() => import('./pages/DashboardLayout')));

const routes: RouteObject[] = [
  //unauthenticated
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'jobs',
    element: <Jobs />,
  },

  //TODO: Add Guest Guard
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },

  //authenticated
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />,
      </AuthGuard>
    ),
  },
];

export default routes;
