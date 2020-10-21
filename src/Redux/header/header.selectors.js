import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectModalOpen = createSelector(
  [selectHeader],
  (header) => header.modalOpen
);
