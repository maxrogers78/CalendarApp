// React
import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// BigCalendar
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// MomentJs
import moment from "moment";
import "moment/locale/es";
// Messages
import { messages } from "../../helpers/calendar-messages-es";
// Ducks
import { uiOpenModalAction } from "../../redux/calendarDuck";
// Components
import NavBar from "../ui/NavBar";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";

moment.locale("es");

const localizer = momentLocalizer(moment);

const events = [
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
];

const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = () => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
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
        view={lastView}
        components={{ event: CalendarEvent }}
      />

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
