import { createSelector } from 'reselect';

const selectModal = (state) => state.modal;

export const selectModalOpen = createSelector(
  [selectModal],
  (modal) => modal.modalOpen
);

export const selectModalType = createSelector(
  [selectModal],
  (modal) => modal.modalType
);
