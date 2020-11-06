import { AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.REMOVE_USER:
      return {
        ...state,
        user: '',
      };
    default:
      return state;
  }
};

export default AuthReducer;
