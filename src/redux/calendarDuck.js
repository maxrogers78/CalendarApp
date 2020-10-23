// MomentJs
import moment from "moment";

//! constants

const uiInitialState = {
  modalOpen: false,
};
const calendarInitialState = {
  events: [
    {
      id: new Date().getTime(),
      title: "Cumple del jefe",
      notes: "Comprar el pastel",
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
const eventClearActiveEvent = "[event] Clear active event";
const eventUpdate = "[event] Event updated";
const eventDeleted = "[event] Event deleted";

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
    case eventAddNew:
      return { ...state, events: [...state.events, action.payload] };

    case eventSetActive:
      return { ...state, activeEvent: action.payload };

    case eventClearActiveEvent:
      return { ...state, activeEvent: null };

    case eventUpdate:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };

    default:
      return state;
  }
};

// export default { uiReducer, calendarReducer };

//! actions
// Modal
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

// Event
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

export const eventClearActiveEventAction = () => (dispatch, getState) => {
  dispatch({
    type: eventClearActiveEvent,
  });
};

export const eventUpdateAction = (event) => (dispatch, getState) => {
  dispatch({
    type: eventUpdate,
    payload: event,
  });
};

export const eventDeleteAction = () => (dispatch, getState) => {
  dispatch({
    type: eventDeleted,
  });
};
