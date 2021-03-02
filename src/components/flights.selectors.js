import moment from "moment";

export const departuresSelector = (state) => {
  const flightsList = state.app.flights;
  const dateToday = moment(new Date()).format("DD-MM-YYYY");

  if (flightsList.length === 0) {
    return [];
  }
  return flightsList.departure
    .filter(
      (flight) =>
        moment(flight.timeDepShedule).format("DD-MM-YYYY") === dateToday
    )
    .map((flight) => setFlight(flight, "departures"));
};

export const arrivalsSelector = (state) => {
  const flightsList = state.app.flights;
  const dateToday = moment(new Date()).format("DD-MM-YYYY");

  if (flightsList.length === 0) {
    return [];
  }
  return flightsList.arrival
    .filter(
      (flight) =>
        moment(flight.timeArrShedule).format("DD-MM-YYYY") === dateToday
    )
    .map((flight) => setFlight(flight, "arrivals"));
};

function setFlight(flight, flightDirection) {
  const localTime =
    flightDirection === "arrivals" ? flight.timeToStand : flight.timeDepShedule;
  const deppArrTime =
    flightDirection === "arrivals"
      ? flight.timeLandFact
      : flight.timeTakeofFact;

  return {
    id: flight.ID,
    term: flight.term,
    localTime: moment(localTime).format("HH:mm"),
    destination:
      flightDirection === "arrivals"
        ? flight["airportFromID.city_en"]
        : flight["airportToID.city_en"],
    status:
      flightDirection === "arrivals"
        ? `Landed ${moment(deppArrTime).format("HH:mm")}`
        : `Departed ${moment(deppArrTime).format("HH:mm")}`,
    airline: {
      logo: flight.airline.en.logoSmallName,
      name: flight.airline.en.name,
    },
    flightNumber: flight.codeShareData[0].codeShare,
  };
}
