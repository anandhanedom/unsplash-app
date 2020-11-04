import axios from 'axios';
import { AuthActionTypes } from './auth.types';

//Load user
//Login user
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
      console.log(err.res);
      dispatch(registerFailure(err.data));
    }
  };
};
