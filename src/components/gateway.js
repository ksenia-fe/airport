import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlightsData = () =>
  fetch(`${baseUrl}/${moment(new Date()).format("DD-MM-YYYY")}`).then(
    (response) => {
      if (response.status === 200) {
        return response.json().then((data) => data.body);
      }
      throw new Error("Failed to load data");
    }
  );
