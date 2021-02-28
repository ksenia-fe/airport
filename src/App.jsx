import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import Table from "./components/table/Table";
import SearchForm from "./components/search-form/SearchForm";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main">
          <SearchForm />
          <div className="shedule">
            <Table />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
