import { ImagesActionTypes } from './images.types';
import axios from 'axios';

export const fetchImagesRequest = () => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_REQUEST,
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};

export const fetchImagesFailure = (error) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: error,
  };
};

export const fetchImages = () => {
  return function (dispatch) {
    dispatch(fetchImagesRequest());
    axios
      .get('http://localhost:3000/images')
      .then((res) => {
        const images = res.data;
        dispatch(fetchImagesSuccess(images));
      })
      .catch(() => {
        dispatch(fetchImagesFailure('Oops! Something went wrong.'));
      });
  };
};
