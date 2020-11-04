import { ModalActionTypes } from './modal.types';

export const toggleModal = () => ({
  type: ModalActionTypes.TOGGLE_MODAL,
});

export const changeModalType = (type) => ({
  type: ModalActionTypes.CHANGE_MODAL_TYPE,
  payload: type,
});
