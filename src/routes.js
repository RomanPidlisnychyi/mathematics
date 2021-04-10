import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/HomeView' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RegisterView' /* webpackChunkName: "register-view" */)
    ),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/LoginView' /* webpackChunkName: "login-view" */)
    ),
  },
  {
    path: '/recovery',
    label: 'Recovery',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RecoveryView' /* webpackChunkName: "recovery-view" */)
    ),
  },
  {
    path: '/admin',
    label: 'Admin',
    exact: true,
    pablic: false,
    restricted: false,
    component: lazy(() =>
      import('./view/AdminView' /* webpackChunkName: "admin-view" */)
    ),
  },
];
