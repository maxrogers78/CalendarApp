// React
import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// BigCalendar
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// MomentJs
import moment from "moment";
import "moment/locale/es";
// Messages
import { messages } from "../../helpers/calendar-messages-es";
// Ducks
import {
  eventClearActiveEventAction,
  eventSetActiveAction,
  uiOpenModalAction,
} from "../../redux/calendarDuck";
// Components
import NavBar from "../ui/NavBar";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import AddNewFab from "../ui/AddNewFab";
import DeleteEventFab from "../ui/DeleteEventFab";

moment.locale("es");

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const dispatch = useDispatch();
  // TODO: leer del store, los eventos

  const { events, activeEvent } = useSelector((store) => store.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = () => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActiveAction(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = () => {
    dispatch(eventClearActiveEventAction());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#6A041D",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "#fff",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{ event: CalendarEvent }}
      />

      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
