import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducer';

export default combineReducers({
  images: imagesReducer,
});
