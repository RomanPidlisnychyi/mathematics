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
    path: '/articles/:articleId/:sectionId/:themeId/results/test',
    label: 'Testing',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/TestingView' /* webpackChunkName: "testing-view" */)
    ),
  },
  {
    path: '/articles/:articleId/:sectionId/:themeId/results/:resultId',
    label: 'ResultDetail',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import(
        './view/ResultDetailView' /* webpackChunkName: "result-detail-view" */
      )
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
    path: '/articles/:articleId/:sectionId/:themeId/:testId',
    label: 'TestDetail',
    exact: false,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/TestDetailView' /* webpackChunkName: "test-detail-view" */)
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
