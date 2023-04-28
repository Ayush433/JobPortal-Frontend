import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compositeWithDevTools } from "@redux-devtools/extension";

//combine reducers

const reducer = combineReducers({});

//initial state
let initialState = {};
const middleware = [thunk];
const store = configureStore(
  reducer,
  initialState,
  compositeWithDevTools(applyMiddleware(...middleware))
);

export default store;
