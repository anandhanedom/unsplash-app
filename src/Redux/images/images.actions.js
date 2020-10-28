import { ImagesActionTypes } from './images.types';

const fetchImagesRequest = () => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_REQUEST,
  };
};

const fetchImagesSuccess = (images) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};

const fetchImagesFailure = (error) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: error,
  };
};
