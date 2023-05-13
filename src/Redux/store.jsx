import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadjobReducer, loadJobSingleReducer } from "./Reducer/jobReducer";
import { loadJobTypeReducer } from "./Reducer/jobTypeReducer";
import {
  userApplyJobReducer,
  userReducerProfile,
  userReducerSignIn,
} from "./Reducer/userReducer";
import { userReducerLogout } from "./Reducer/userReducer";

//combine reducers

const reducer = combineReducers({
  loadJobs: loadjobReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  applyJob: userApplyJobReducer,
});

//initial state
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), ...middleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
