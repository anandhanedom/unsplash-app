import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  loading: false,
  images: [],
  error: '',
};

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImagesActionTypes.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, loading: false, images: action.payload, error: '' };

    case ImagesActionTypes.FETCH_IMAGES_FAILURE:
      return { ...state, loading: false, images: [], error: action.payload };

    default:
      return state;
  }
};

export default imagesReducer;
