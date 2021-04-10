import axios from 'axios';

axios.defaults.baseURL = 'https://mathematics-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';

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
      token.setTokens({ access: accessToken, refresh });
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

export const refresh = async () => {
  try {
    const response = await axios.get('/auth/refresh');
    const { access } = response.data;

    if (access) {
      token.setAccessToken(access);
    }

    return response;
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

export const vacancies = async () => {
  try {
    const response = await axios.get('/vacancy');

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return err;
  }
};

export const createVacancy = async vacancy => {
  try {
    const response = await axios.post('/vacancy', vacancy);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const updateVacancy = async (credentials, id) => {
  try {
    const response = await axios.patch(`/vacancy/${id}`, credentials);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const deleteVacancy = async vacancyId => {
  try {
    const response = await axios.delete(`/vacancy/${vacancyId}`);

    const {
      data: { access },
      status,
    } = response;

    if (access) {
      token.setAccessToken(access);
    }

    return status;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const getCompaniesNames = async (query = 'Viseven') => {
  try {
    const response = await fetch(
      `https://jobs.dou.ua/companies/?name=${query}`
    );

    const data = await response.json();

    console.log('data', data);
  } catch (err) {
    console.log('err', err);
  }
};
