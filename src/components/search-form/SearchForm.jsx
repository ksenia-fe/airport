import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import qs from "qs";

import * as Actions from "../flights.actions";
import "./search-form.scss";

const SearchForm = ({ searchedFlight, setSearchedFlight }) => {
  const { search, pathname } = useLocation();
  const searchedFlightByDefault = qs.parse(search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (searchedFlightByDefault.searched) {
      setSearchedFlight(searchedFlightByDefault.searched);
    }
  }, [search]);

  return (
    <div className="search-flights">
      <h2 className="search-flights__title">search flights</h2>
      <div className="search-flights__form">
        <input
          className="search-flights__form_input"
          type="text"
          placeholder="flight #"
          value={searchedFlight}
          onChange={(e) => setSearchedFlight(e.target.value)}
        />
        <i className="fas fa-search"></i>
        <Link
          to={`${
            pathname === "/" ? "departures" : pathname
          }?searched=${searchedFlight}`}
        >
          <button className="search-flights__form_btn">search</button>
        </Link>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    searchedFlight: state.app.searchedFlight,
  };
};

const mapDispatch = {
  setSearchedFlight: Actions.setSearchedFlight,
};

SearchForm.propTypes = {
  searchedFlight: PropTypes.string.isRequired,
  setSearchedFlight: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(SearchForm);
