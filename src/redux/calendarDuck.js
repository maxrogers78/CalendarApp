// MomentJs
import moment from "moment";

//! constants

const uiInitialState = {
  modalOpen: false,
};
const calendarInitialState = {
  events: [
    {
      title: "Cumple del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      user: {
        _id: "123",
        name: "Maximiliano",
      },
    },
  ],
  activeEvent: null,
};

//! types
const uiOpenModal = "[ui] Open modal";
const uiCloseModal = "[ui] Close modal";
const eventSetActive = "[event] Set Active";
const eventAddNew = "[event] Add new";

//! reducers
// open & close the modal
export const uiReducer = (state = uiInitialState, action) => {
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
};

// add & set active an event
export const calendarReducer = (state = calendarInitialState, action) => {
  switch (action.type) {
    case eventSetActive:
      return { ...state, activeEvent: action.payload };

    default:
      return state;
  }
};

// export default { uiReducer, calendarReducer };

//! actions
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

export const eventAddNewAction = (event) => (dispatch, getState) => {
  dispatch({
    type: eventAddNew,
    payload: event,
  });
};

export const eventSetActiveAction = (event) => (dispatch, getState) => {
  dispatch({
    type: eventSetActive,
    payload: event,
  });
};
