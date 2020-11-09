import { ImagesActionTypes } from './images.types';
import axios from 'axios';

//Actions
import { addUserDetailsToStore } from '../auth/auth.actions';

//Request Headers
const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('access_token'),
};

//Add image
export const addImage = (image) => {
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
  return async (dispatch) => {
    dispatch(fetchImagesStart());
    await axios
      .get('images', { headers: headers })
      .then((res) =>
        setTimeout(() => {
          dispatch(fetchImagesSuccess(res.data));
        }, 1000)
      )
      .catch((err) => dispatch(fetchImagesFailure(err)));
  };
};

//Add image to db
export const addImageToDb = (title, url, userId) => {
  return async (dispatch) => {
    await axios
      .post(
        `images`,
        {
          userID: userId,
          title: title,
          url: url,
        },
        { headers: headers }
      )
      .then((res) => dispatch(addImage(res.data)));
  };
};

//Delete image from db
export const deleteImageFromDb = (id, userName, password) => {
  let response = null;
  return async (dispatch) => {
    await axios
      .get('login', { email: userName, password: password })
      .then((res) => {
        response = res.data;

        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);

        const parsedToken = JSON.parse(
          atob(response.access_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .then(() => {
        axios.delete(`images/${id}`, { headers: headers }).then((res) => {
          if (res.request.status === 200) {
            dispatch(deleteImage(id));
          }
        });
      });
  };
};
