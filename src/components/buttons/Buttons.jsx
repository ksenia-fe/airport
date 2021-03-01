import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./buttons.scss";

const Buttons = () => {
  const { search, pathname } = useLocation();

  const depBtnClass =
    pathname.includes("/departures") || pathname === ""
      ? "clicked"
      : "unclicked";
  const arrBtnClass =
    pathname.includes("/departures") || pathname === ""
      ? "unclicked"
      : "clicked";

  return (
    <div className="shedule__buttons">
      <Link to={`departures${search}`}>
        <button className={`departures-btn ${depBtnClass}`}>
          <i
            className="fas fa-plane"
            style={{ transform: "rotate(-15deg)" }}
          ></i>
          <span>Departures</span>
        </button>
      </Link>
      <Link to={`arrivals${search}`}>
        <button className={`arrivals-btn ${arrBtnClass}`}>
          <i
            className="fas fa-plane"
            style={{ transform: "rotate(15deg)" }}
          ></i>
          <span>Arrivals</span>
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
