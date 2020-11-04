import { AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  accessToken: localStorage.getItem('accessToken'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    }

    case AuthActionTypes.REGISTER_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS: {
      localStorage.setItem('accessToken', action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
        loading: false,
      };
    }

    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.AUTH_ERROR:
    case AuthActionTypes.LOGIN_FAIL: {
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    }

    case AuthActionTypes.LOGOUT: {
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
