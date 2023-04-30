import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadjobReducer } from "./Reducer/jobReducer";
import { loadJobTypeReducer } from "./Reducer/jobTypeReducer";

//combine reducers

const reducer = combineReducers({
  loadJobs: loadjobReducer,
  jobTypeAll: loadJobTypeReducer,
});

//initial state
let initialState = {};
const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), ...middleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
