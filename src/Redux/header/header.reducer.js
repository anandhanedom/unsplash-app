const INITIAL_STATE = {
  modalOpen: false,
  searchBoxValue: '',
  isModalDelete: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    case 'SEARCH_CHANGE':
      return {
        ...state,
        searchBoxValue: action.payload,
      };

    case 'MODAL_TYPE_CHANGE':
      return { ...state, isModalDelete: action.payload };

    default:
      return state;
  }
};

export default headerReducer;
