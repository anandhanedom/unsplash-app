import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  images: [],
  deleteId: null,
  searchValue: '',
  loading: false,
  err: '',
};

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImagesActionTypes.SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case ImagesActionTypes.SET_DELETE_ID:
      return {
        ...state,
        deleteId: action.payload,
      };

    case ImagesActionTypes.FETCH_IMAGES_START:
      return { ...state, loading: true };

    case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, loading: false, images: action.payload };

    case ImagesActionTypes.FETCH_IMAGES_FAILURE:
      return { ...state, loading: false, err: action.payload };

    case ImagesActionTypes.ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case ImagesActionTypes.DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((img) => img.id !== action.payload),
      };

    default:
      return state;
  }
};

export default imagesReducer;
