import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  loading: false,
  images: [],
  fetchError: '',
  uploadSuccess: '',
  uploadError: '',
};

const imagesReducer = (state = INITIAL_STATE, action) => {
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
        fetchError: '',
      };

    case ImagesActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        images: [],
        fetchError: action.payload,
      };

    // Uploading part
    case ImagesActionTypes.UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
      };

    case ImagesActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadSuccess: action.payload,
        uploadError: '',
      };

    case ImagesActionTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadError: action.payload,
        uploadSuccess: '',
      };

    default:
      return state;
  }
};

export default imagesReducer;
