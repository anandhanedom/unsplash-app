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
const registerFailure = (message) => {
  return {
    type: AuthActionTypes.REGISTER_FAIL,
    payload: message,
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
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return async (dispatch) => {
    try {
      const res = await axios.post('signup', formData, config);

      dispatch(registerSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(registerFailure(err.response.data.msg));
    }
  };
};

//Login User
export const login = (formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return async (dispatch) => {
    try {
      const res = await axios.post('signin', formData, config);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err.response.data.msg));
    }
  };
};
