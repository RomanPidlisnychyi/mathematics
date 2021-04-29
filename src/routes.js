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
  {
    path: '/articles',
    label: 'Articles',
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/ArticlesView' /* webpackChunkName: "articles-view" */)
    ),
  },
  {
    path: '/articles/:articleId/:sectionId/:themeId/results',
    label: 'Results',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/ResultsView' /* webpackChunkName: "results-view" */)
    ),
  },
  {
    path: '/articles/:articleId/:sectionId/:themeId/test',
    label: 'Testing',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/TestingView' /* webpackChunkName: "testing-view" */)
    ),
  },
  {
    path: '/articles/:articleId/:sectionId/:themeId',
    label: 'ThemeDetail',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/ThemeView' /* webpackChunkName: "theme-detail-view" */)
    ),
  },
  {
    path: '/articles/:articleId/:sectionId',
    label: 'SectionDetail',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import(
        './view/SectionDetailView' /* webpackChunkName: "section-detail-view" */
      )
    ),
  },
  {
    path: '/articles/:articleId',
    label: 'ArticleDetail',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import(
        './view/ArticleDetailView' /* webpackChunkName: "article-detail-view" */
      )
    ),
  },
];
