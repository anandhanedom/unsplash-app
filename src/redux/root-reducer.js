import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducers';

export default combineReducers({
  images: imagesReducer,
});
