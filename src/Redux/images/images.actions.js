import { ImagesActionTypes } from './images.types';
import axios from 'axios';

//Image fetching actions
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

// Image add actions
export const uploadImageRequest = (img) => {
  return {
    type: ImagesActionTypes.UPLOAD_IMAGE_REQUEST,
    payload: img,
  };
};

export const uploadImageSuccess = (res) => {
  return {
    type: ImagesActionTypes.UPLOAD_IMAGE_SUCCESS,
    payload: res,
  };
};

export const uploadImageFailure = (error) => {
  return {
    type: ImagesActionTypes.UPLOAD_IMAGE_FAILURE,
    payload: error,
  };
};

//Thunk handled functions
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
