// React
import React from "react";
// BigCalendar
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// MomentJs
import moment from "moment";
import "moment/locale/es";
// Messages
import { messages } from "../../helpers/calendar-messages-es";
// Components
import NavBar from "../ui/NavBar";

moment.locale("es");

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Cumple del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

const CalendarScreen = () => {
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
      />
    </div>
  );
};

export default CalendarScreen;
