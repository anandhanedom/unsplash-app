import { AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null,
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case AuthActionTypess.SEARCH_CHANGE:
    //   return {
    //     ...state,
    //     searchValue: action.payload,
    //   };

    default:
      return state;
  }
};

export default AuthReducer;
