import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducer';
import modalReducer from './modal/modal.reducer';
import authReducer from './auth/auth.reducer';
import alertReducer from './alert/alert.reducer';

export default combineReducers({
  images: imagesReducer,
  modal: modalReducer,
  auth: authReducer,
  alert: alertReducer,
});
