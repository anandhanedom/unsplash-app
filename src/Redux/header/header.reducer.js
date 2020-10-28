const INITIAL_STATE = {
  modalOpen: false,
  searchBoxValue: '',
  modalType: '',
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_CHANGE':
      return {
        ...state,
        searchBoxValue: action.payload,
      };

    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    case 'CHANGE_MODAL_TYPE':
      return {
        ...state,
        modalType: action.payload,
      };

    default:
      return state;
  }
};

export default headerReducer;
