import { ImagesActionTypes } from './images.types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

//Request Headers
const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('access_token'),
};

//Add image
export const addImage = (image) => {
  image.id = uuidv4();
  return {
    type: ImagesActionTypes.ADD_IMAGE,
    payload: image,
  };
};

//Delete image
export const deleteImage = (id) => {
  return {
    type: ImagesActionTypes.DELETE_IMAGE,
    payload: id,
  };
};

//Set img to delete id
export const setDeleteId = (id) => {
  return {
    type: ImagesActionTypes.SET_DELETE_ID,
    payload: id,
  };
};

export const handleSearchChange = (value) => {
  return {
    type: ImagesActionTypes.SEARCH_CHANGE,
    payload: value,
  };
};

export const toggleLoading = () => {
  return {
    type: ImagesActionTypes.LOADING,
  };
};

export const fetchImagesStart = () => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_START,
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};

export const fetchImagesFailure = (err) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: err,
  };
};

//Fetch images from db
export const fetchImages = () => {
  return (dispatch) => {
    dispatch(fetchImagesStart());
    axios
      .get('images', { headers: headers })
      .then((res) =>
        setTimeout(() => {
          dispatch(fetchImagesSuccess(res.data));
        }, 1000)
      )
      .catch((err) => dispatch(fetchImagesFailure(err)));
  };
};
