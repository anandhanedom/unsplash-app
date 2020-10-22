const INITIAL_STATE = {
  modalOpen: false,
  searchBoxValue: '',
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

    default:
      return state;
  }
};

export default headerReducer;
