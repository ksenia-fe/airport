import React from "react";
import Flight from "./Flight";

const ArrDeps = ({ flights }) =>
  flights && (
    <tbody>
      {flights.length === 0 ? (
        <tr>
          <td></td>
          <td></td>
          <td>No Flights</td>
        </tr>
      ) : (
        flights.map((flight, ind) => (
          <Flight key={flight.id} flight={flight} ind={ind} />
        ))
      )}
    </tbody>
  );

export default ArrDeps;
