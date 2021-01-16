import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import TheMoviesData from "./Reducers/TheMovieDB";

const reducer = combineReducers({
  TheMoviesData,
});

const composeEnhancers = compose;

export default function generateStore() {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
