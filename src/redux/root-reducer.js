import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
  images: imagesReducer,
  modal: modalReducer,
});
