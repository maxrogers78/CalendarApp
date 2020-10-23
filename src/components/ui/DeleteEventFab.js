// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Ducks
import { eventDeleteAction } from "../../redux/calendarDuck";

const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventDeleteAction());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  );
};

export default DeleteEventFab;
