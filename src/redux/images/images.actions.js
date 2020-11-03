import { ImagesActionTypes } from './images.types';
import { v4 as uuidv4 } from 'uuid';

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

//Filter images
//Clear filter
