import axios from 'axios';
import { AuthActionTypes } from './auth.types';

//Request header
const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('access_token'),
};

// User login
export const addUserDetailsToStore = (user) => ({
  type: AuthActionTypes.ADD_USER,
  payload: user,
});

// User sign Up async
export const signUpWithCredentialAsync = (userName, password) => {
  return async (dispatch) => {
    let response;

    await axios
      .get('signup')
      .then((res) => {
        response = res;
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        const parsedToken = JSON.parse(
          atob(response.data.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .catch((err) => alert('Error:', err));
  };
};

//User login async
export const loginWithCredentialsAsync = (userName, password) => {
  return async (dispatch) => {
    let response;

    await axios
      .get('login', { email: userName, password: password })
      .then((res) => {
        response = res.data;
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);

        const parsedToken = JSON.parse(
          atob(response.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      });
  };
};

// User login with refresh token async
export const loginWithRefreshToken = async (refresh_token) => {
  return async (dispatch) => {
    let response;

    await axios
      .get('login', {
        headers: {
          Authorization: refresh_token,
        },
      })
      .then((res) => {
        response = res.data;
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);

        const parsedToken = JSON.parse(
          atob(response.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .then(() => console.log('Refresh token signin'));
  };
};

// User logout
export const removeUserFromStore = () => ({
  type: AuthActionTypes.REMOVE_USER,
});

//User logout async
export const logoutAsync = () => {
  return async (dispatch) => {
    let response;
    await axios.get('logout', { headers: headers }).then((res) => {
      response = res;
      if (response.status === 200 && response.data.Authorization === '') {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        dispatch(removeUserFromStore());
      } else {
        alert('Something went wrong! Try again!');
      }
    });
  };
};
