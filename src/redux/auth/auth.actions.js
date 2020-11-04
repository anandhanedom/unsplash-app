import axios from 'axios';
import { AuthActionTypes } from './auth.types';

//Login success
const loginSuccess = (data) => {
  return {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

//Login fail
const loginFailure = (message) => {
  return {
    type: AuthActionTypes.LOGIN_FAIL,
    payload: message,
  };
};

//Register success
const registerSuccess = (data) => {
  return {
    type: AuthActionTypes.REGISTER_SUCCESS,
    payload: data,
  };
};

//Register fail
const registerFailure = () => {
  return {
    type: AuthActionTypes.REGISTER_FAIL,
  };
};

//Load success
const loadUserSuccess = (data) => {
  return {
    type: AuthActionTypes.USER_LOADED,
    payload: data,
  };
};

//Load failure
const authError = () => {
  return {
    type: AuthActionTypes.AUTH_ERROR,
  };
};

//Logout
export const logout = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

//Load user
export const loadUser = () => {
  return async (dispatch) => {
    //load token into global header
    try {
      const res = await axios.get('600/users/1');
      dispatch(loadUserSuccess(res.data));
    } catch (error) {
      dispatch(authError());
    }
  };
};

//Register User
export const register = (formData) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);

    try {
      const res = await axios.post('signup', body, config);

      dispatch(registerSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(registerFailure());
    }
  };
};

//Login User
export const login = (formData) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);

    try {
      const res = await axios.post('signin', body, config);

      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };
};
