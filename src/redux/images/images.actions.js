import { ImagesActionTypes } from './images.types';
import { toggleModal } from '../modal/modal.actions';

import axios from 'axios';

//Actions
import { addUserDetailsToStore } from '../auth/auth.actions';
import { addAlert } from '../alert/alert.actions';

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

    await axios({
      method: 'get',
      url: '/api/images/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        dispatch(fetchImagesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchImagesFailure(err.response));
        alert(err.response);
      });
  };
};

//Add image to db
export const addImageToDb = (fd) => {
  return async (dispatch) => {
    await axios
      .post('/api/images/', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access_token')} `,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(addImage(res.data));
          dispatch(toggleModal());
          setTimeout(() => {
            alert('Image added successfully!');
          }, 300);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

//Delete image from db
export const deleteImageFromDb = (id, username, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return async (dispatch) => {
    const body = JSON.stringify({ username: username, password: password });

    await axios
      .post('/login', body, config)
      .then((res) => {
        localStorage.setItem('access_token', res.data.acces_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

        const parsedToken = JSON.parse(
          atob(res.data.acces_token.split('.')[1])
        );

        dispatch(addUserDetailsToStore(parsedToken.username));
      })
      .then(() => {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        };

        axios
          .delete(`/api/images/id/${id}`, config)
          .then((res) => {
            if (res.status === 200) {
              dispatch(deleteImage(id));
              dispatch(toggleModal());
              setTimeout(() => {
                alert('Image deleted successfully!');
              }, 300);
            }
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(addAlert('Wrong password', 'error', 3000));
        }
      });
  };
};
