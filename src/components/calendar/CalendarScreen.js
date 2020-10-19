// React
import React from "react";
// BigCalendar
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// MomentJs
import moment from "moment";
// Components
import NavBar from "../ui/NavBar";

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
  return (
    <div className="calendar-screen">
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarScreen;
