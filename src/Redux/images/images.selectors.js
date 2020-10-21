import { createSelector } from 'reselect';

const selectImage = (state) => state.images;

export const selectImages = createSelector(
  [selectImage],
  (image) => image.images
);
