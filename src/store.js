import { createStore,combineReducers, applyMiddleware, compose } from "redux";
import Reducer from "./reducer/reducer";
import thunk from "redux-thunk";

export const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk)
  )
);
