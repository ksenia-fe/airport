import React from "react";
import PropTypes from "prop-types";

const Flight = ({ flight, ind }) => {
  const {
    term,
    localTime,
    destination,
    status,
    airline,
    flightNumber,
  } = flight;

  const terminalClass =
    flight.term === "D" ? "terminal-field_d" : "terminal-field_a";
  const backgroundColor = ind % 2 ? "#fff" : null;

  return (
    <tr style={{ backgroundColor }}>
      <td className="terminal-field">
        <span className={terminalClass}>{term}</span>
      </td>
      <td className="local-time-field">{localTime}</td>
      <td className="destination-field">{destination}</td>
      <td className="status-field">{status}</td>
      <td className="airline-field">
        <img className="flight-logo" src={airline.logo} alt="airline logo" />
        <span>{airline.name}</span>
      </td>
      <td className="flight-field">{flightNumber}</td>
    </tr>
  );
};

Flight.propTypes = {
  flight: PropTypes.shape({
    term: PropTypes.string.isRequired,
    localTime: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    airline: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    flightNumber: PropTypes.string.isRequired,
  }),
  ind: PropTypes.number.isRequired,
};

export default Flight;
