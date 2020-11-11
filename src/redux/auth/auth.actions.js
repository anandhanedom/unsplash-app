import axios from 'axios';
import { AuthActionTypes } from './auth.types';

//Actions
import { addAlert } from '../alert/alert.actions';

// User login
export const addUserDetailsToStore = (user) => ({
  type: AuthActionTypes.ADD_USER,
  payload: user,
});

// User sign Up async
export const signUpWithCredentialAsync = (username, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username: username, password: password });

  return async (dispatch) => {
    await axios
      .post('signup', body, config)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

        const parsedToken = JSON.parse(
          atob(res.data.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//User login async
export const loginWithCredentialsAsync = (username, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username: username, password: password });

  return async (dispatch) => {
    await axios
      .post('login', body, config)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

        const parsedToken = JSON.parse(
          atob(res.data.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(addAlert('Wrong username or password', 'error', 3000));
        }
      });
  };
};

// User login with refresh token async
export const loginWithRefreshToken = async (refresh_token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: refresh_token,
    },
  };

  return async (dispatch) => {
    await axios
      .get('login', null, config)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

        const parsedToken = JSON.parse(
          atob(res.data.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// User logout
export const removeUserFromStore = () => ({
  type: AuthActionTypes.REMOVE_USER,
});

//User logout async
export const logoutAsync = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token'),
    },
  };

  return async (dispatch) => {
    await axios
      .get('logout', null, config)
      .then((res) => {
        if (res.status === 200 && res.data.Authorization === '') {
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('access_token');
          dispatch(removeUserFromStore());
        } else {
          alert('Something went wrong! Try again!');
        }
      })
      .catch((err) => console.log(err));
  };
};
