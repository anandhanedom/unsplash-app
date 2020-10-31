import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  loading: false,
  images: [],
};

const ImagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Fetching part
    case ImagesActionTypes.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default ImagesReducer;
