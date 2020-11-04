import axios from 'axios';
import { AuthActionTypes } from './auth.types';
//Login success

//Login fail

//Logout

//Clear errors

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
      dispatch(registerFailure(err.data));
    }
  };
};
