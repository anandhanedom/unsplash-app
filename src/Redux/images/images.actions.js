import { ImagesActionTypes } from './images.types';

export const setImages = (images) => ({
  type: ImagesActionTypes.SET_IMAGES,
  payload: images,
});
