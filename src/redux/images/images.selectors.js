import { createSelector } from 'reselect';

const selectImage = (state) => state.images;

export const selectImages = createSelector(
  [selectImage],
  (image) => image.images
);

export const selectDeleteId = createSelector(
  [selectImage],
  (image) => image.deleteId
);

export const selectSearchValue = createSelector(
  [selectImage],
  (image) => image.searchValue
);

export const selectLoading = createSelector(
  [selectImage],
  (image) => image.loading
);
