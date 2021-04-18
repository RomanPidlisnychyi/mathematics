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
  setAccessToken(access) {
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

export const register = async credentials => {
  try {
    const { password } = credentials;

    const response = await axios.post('/auth/register', credentials);

    return { ...response.data, password };
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post('/auth/login', credentials);

    const { tokens } = response.data;
    token.setTokens(tokens);

    return response.data;
  } catch (err) {
    console.log('err', err);
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const logout = () => {
  token.unset();
};

export const current = async tokens => {
  try {
    token.setTokens(tokens);

    const response = await axios.get('/auth/current');

    const { access: accessToken } = response.data;
    if (accessToken) {
      token.setAccessToken(accessToken);
      tokens = { ...tokens, access: accessToken };
    }

    return { user: response.data.user, tokens };
  } catch (err) {
    token.unset();
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const recovery = async credentials => {
  try {
    const response = await axios.post('/auth/setRecoveryPassword', credentials);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const newPassword = async credentials => {
  try {
    const response = await axios.patch('/auth/setNewPassword', credentials);

    const { password } = credentials;

    return { ...response.data, password };
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const getArticles = async () => {
  try {
    const response = await axios.get('/articles');

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const createArticle = async credentials => {
  try {
    const response = await axios.post('/articles', credentials);

    const accessToken = response.data.accessToken;
    if (accessToken) {
      token.setAccessToken(accessToken);
    }

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const getSections = async articleId => {
  try {
    const response = await axios.get(`/sections/${articleId}`);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const createSection = async ({ name, articleId }) => {
  try {
    const response = await axios.post(`/sections/${articleId}`, { name });

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const getThemes = async sectionId => {
  try {
    const response = await axios.get(`/themes/${sectionId}`);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const createTheme = async ({ name, sectionId }) => {
  try {
    const response = await axios.post(`/themes/${sectionId}`, { name });

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const addTest = async test => {
  try {
    const response = await axios.post('/tests', test);

    console.log('response', response);

    // return { ...response.data, password };
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};
