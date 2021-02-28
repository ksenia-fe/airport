import { SET_FLIGHTS_DATA, SET_SEARCHED_FLIGHT } from "./flights.actions";

const initialState = {
  flights: [],
  searchedFlight: "",
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS_DATA:
      return {
        ...state,
        flights: action.payload.flightsData,
      };
    case SET_SEARCHED_FLIGHT:
      return {
        ...state,
        searchedFlight: action.payload.flightNumber,
      };

    default:
      return state;
  }
};
