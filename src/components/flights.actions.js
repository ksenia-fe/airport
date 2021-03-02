import { fetchFlightsData } from "./gateway";

export const SET_FLIGHTS_DATA = "SET_FLIGHTS_DATA";
export const SET_SEARCHED_FLIGHT = "SET_SEARCHED_FLIGHT";

export const setFlights = (flightsData) => {
  return {
    type: SET_FLIGHTS_DATA,
    payload: {
      flightsData,
    },
  };
};

export const setSearchedFlight = (flightNumber) => {
  return {
    type: SET_SEARCHED_FLIGHT,
    payload: {
      flightNumber,
    },
  };
};

export const fetchFlights = () => {
  return function (dispatch) {
    fetchFlightsData()
      .then((data) => dispatch(setFlights(data)))
      .catch((err) => alert(err.message));
  };
};
