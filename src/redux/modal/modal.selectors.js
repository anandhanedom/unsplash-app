import { createSelector } from 'reselect';

const selectModal = (state) => state.modal;

export const selectModalOpen = createSelector(
  [selectModal],
  (header) => header.modalOpen
);

export const selectModalType = createSelector(
  [selectModal],
  (header) => header.modalType
);
