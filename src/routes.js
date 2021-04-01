import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import RecoveryView from './view/RecoveryView';
import AdminView from './view/AdminView';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: true,
    restricted: false,
    component: HomeView,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    pablic: true,
    restricted: true,
    component: LoginView,
  },
  {
    path: '/recovery',
    label: 'Recovery',
    exact: true,
    pablic: true,
    restricted: true,
    component: RecoveryView,
  },
  {
    path: '/admin',
    label: 'Admin',
    exact: true,
    pablic: false,
    restricted: false,
    component: AdminView,
  },
];
