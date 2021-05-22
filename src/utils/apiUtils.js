import axios from 'axios';

// axios.defaults.baseURL = 'https://mathematics-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3001';

export const token = {
  setTokens(tokens) {
    const { access, refresh } = tokens;

    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
      'x-refresh-token': refresh,
    };

    localStorage.setItem('mathematicsTokens', JSON.stringify(tokens));
  },
  setAccessToken(response) {
    const access = response.data.accessToken;
    if (!access) {
      return;
    }

    const { refresh } = token.getLocalTokens();
    token.setTokens({ access, refresh });
  },
  getLocalTokens() {
    const tokens = localStorage.getItem('mathematicsTokens');

    return tokens ? JSON.parse(tokens) : null;
  },
  unset() {
    localStorage.removeItem('mathematicsTokens');

    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: '',
      'x-refresh-token': '',
    };
  },
};

export const register = async credentials =>
  await axios.post('/auth/register', credentials);

export const login = async credentials => {
  const response = await axios.post('/auth/login', credentials);

  const { tokens } = response.data;
  token.setTokens(tokens);

  return response;
};

export const logout = () => {
  token.unset();
};

export const current = async tokens => {
  token.setTokens(tokens);

  const response = await axios.get('/auth/current');

  token.setAccessToken(response);
  return response;
};

export const recovery = async credentials =>
  await axios.post('/auth/setRecoveryPassword', credentials);

export const newPassword = async credentials =>
  await axios.patch('/auth/setNewPassword', credentials);

export const getArticles = async () => await axios.get('/articles');

export const createArticle = async credentials => {
  const response = await axios.post('/articles', credentials);

  token.setAccessToken(response);

  return response;
};

export const deleteArticle = async id => {
  const response = await axios.delete(`/articles/${id}`);

  token.setAccessToken(response);

  return response;
};

export const getSections = async articleId => {
  const response = await axios.get(`/sections/${articleId}`);

  token.setAccessToken(response);

  return response;
};

export const createSection = async ({ name, articleId }) => {
  const response = await axios.post(`/sections/${articleId}`, { name });

  token.setAccessToken(response);

  return response;
};

export const getThemes = async sectionId => {
  const response = await axios.get(`/themes/${sectionId}`);

  token.setAccessToken(response);

  return response;
};

export const createTheme = async ({ name, sectionId }) => {
  const response = await axios.post(`/themes/${sectionId}`, { name });

  token.setAccessToken(response);

  return response;
};

export const getThemesByQuery = async query => {
  const response = await axios.get(`/themes/query/?${query}`);

  token.setAccessToken(response);

  return response;
};

export const getThemePath = async theme => {
  const response = await axios.post('/themes/theme', theme);

  token.setAccessToken(response);

  return response;
};

export const getTests = async themeId => {
  const response = await axios.get(`/tests/${themeId}`);

  token.setAccessToken(response);
  return response;
};

export const createTest = async ({ themeId, test }) => {
  const response = await axios.post(`/tests/${themeId}`, test);

  token.setAccessToken(response);

  return response;
};

export const getTestById = async testId => {
  const response = await axios.get(`/tests/testId/?testId=${testId}`);

  token.setAccessToken(response);
  return response;
};

export const getTesting = async themeId => {
  const response = await axios.get(`/testing/${themeId}`);

  token.setAccessToken(response);
  return response;
};

export const createTestingResult = async ({ themeId, testing }) => {
  const response = await axios.post(`/testing/${themeId}`, testing);

  token.setAccessToken(response);
  return response;
};

export const getTestingResults = async themeId => {
  const response = await axios.get(`/testing/results/${themeId}`);

  token.setAccessToken(response);
  return response;
};

export const getTestingResultById = async testingId => {
  const response = await axios.get(`/testing/resultsById/${testingId}`);

  token.setAccessToken(response);
  return response;
};
