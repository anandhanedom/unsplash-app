const INITIAL_STATE = {
  modalOpen: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    default:
      return state;
  }
};

export default headerReducer;
