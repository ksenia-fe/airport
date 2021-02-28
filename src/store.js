import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { flightsReducer } from "./components/flights.reducer";

const reducer = combineReducers({
  app: flightsReducer,
});
const composeEnhanceres =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhanceres(applyMiddleware(thunk)));

export default store;
