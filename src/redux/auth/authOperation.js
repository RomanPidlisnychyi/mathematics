import authActions from './authActions';
import apiURL from '../../services/apiURL';
import recoveryPassStep from '../../utils/recoveryPassStep';

const singin = payload => async dispatch => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${apiURL}/auth/login`, options);

  const data = await response.json();
  if (response.status >= 400) {
    console.log('data.message', data.message);
    dispatch(authActions.loginError(data.message));

    setTimeout(() => {
      dispatch(authActions.loginError(null));
    }, 2000);
    return;
  }

  console.log('data', data);

  // const adminEmail = 'myluckyhelper@gmail.com';
  // const adminPass = '1041';

  // if (email !== adminEmail || password !== adminPass) {
  //   dispatch(authActions.loginError());
  //   setTimeout(() => {
  //     dispatch(authActions.loginError());
  //   }, 1500);
  //   return;
  // }

  // const user = {
  //   email,
  //   name: 'Lucky',
  // };

  // localStorage.setItem('user', JSON.stringify(user));

  // dispatch(authActions.login(user));
};

const singout = () => async dispatch => {
  dispatch(authActions.logout());
  localStorage.removeItem('user');
};

const recoveryPassword = payload => async dispatch => {
  const { email, code, password } = payload;

  if (email) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    };

    const response = await fetch(`${apiURL}/users`, options);

    const user = await response.json();
    console.log('user', user);
    if (response.status >= 400) {
      dispatch(authActions.loginError(user.message));
      setTimeout(() => {
        dispatch(authActions.loginError(null));
      }, 2000);
      return;
    }

    dispatch(authActions.recoveryStatus(recoveryPassStep.SECOND_STEP));
  }

  if (code) {
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // };
    // const user = await fetch(`${apiURL}/users`, options);
    // console.log('user', user);

    // return;
    dispatch(authActions.recoveryStatus(recoveryPassStep.THIRD_STEP));
  }

  if (password) {
    // const options = {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ password }),
    // };
    // const user = await fetch(`${apiURL}/users`, options);
    // console.log('user', user);

    // return;
    // window.location.push('/login');
    // window.location.href = 'http://localhost:3000/login';
    dispatch(authActions.recoveryStatus(null));
  }
};

export default {
  singin,
  singout,
  recoveryPassword,
};
