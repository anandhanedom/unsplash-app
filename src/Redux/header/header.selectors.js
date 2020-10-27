import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectModalOpen = createSelector(
  [selectHeader],
  (header) => header.modalOpen
);

export const selectSearchBoxValue = createSelector(
  [selectHeader],
  (header) => header.searchBoxValue
);

export const selectModalType = createSelector(
  [selectHeader],
  (header) => header.modalType
);
