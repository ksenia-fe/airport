import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Table from "./components/table/Table";
import Buttons from "./components/buttons/Buttons";
import SearchForm from "./components/search-form/SearchForm";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main">
          <Route path="/">
            <SearchForm />
            <Buttons />
          </Route>
          <div className="shedule">
            <Route path="/:flightDirection">
              <Table />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
