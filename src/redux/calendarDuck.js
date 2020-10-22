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

    case uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
}

// actions
export const uiOpenModalAction = () => (dispatch, getState) => {
  dispatch({
    type: uiOpenModal,
  });
};

export const uiCloseModalAction = () => (dispatch, getState) => {
  dispatch({
    type: uiCloseModal,
  });
};
