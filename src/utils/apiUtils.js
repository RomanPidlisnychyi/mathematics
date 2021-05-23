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

export const fetching = async ({ method, path, credentials }) => {
  const response = await axios[method](path, credentials);

  token.setAccessToken(response);

  return response;
};
