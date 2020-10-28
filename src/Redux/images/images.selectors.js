import { createSelector } from 'reselect';

const selectImage = (state) => state.images;

export const selectImages = createSelector(
  [selectImage],
  (image) => image.images
);

export const selectLoading = createSelector(
  [selectImage],
  (image) => image.loading
);

export const selectError = createSelector(
  [selectImage],
  (image) => image.fetchError
);
