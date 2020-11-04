import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducer';
import modalReducer from './modal/modal.reducer';
import authReducer from './auth/auth.reducer';

export default combineReducers({
  images: imagesReducer,
  modal: modalReducer,
  auth: authReducer,
});
