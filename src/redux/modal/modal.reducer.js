import { ModalActionTypes } from './modal.types';

const INITIAL_STATE = {
  modalOpen: false,
  modalType: false,

  label: '',
  password: '',
  url: '',
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    case ModalActionTypes.CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
