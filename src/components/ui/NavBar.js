// React
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Cristian</span>

      <button className="btn btn-outline-danger">
        <div className="fas fa-sign-out-alt"></div>
        <span> Salir</span>
      </button>
    </div>
  );
};

export default NavBar;
