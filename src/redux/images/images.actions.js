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

//Fetch thunk
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
        alert('Something went wrong!');
      });
  };
};
