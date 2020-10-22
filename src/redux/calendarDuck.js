// constants
const initialState = {
  modalOpen: false,
};

// types
const uiOpenModal = "[ui] Open modal";
const uiCloseModal = "[ui] Close modal";

// reducer
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    default:
      return state;
  }
}

// actions
