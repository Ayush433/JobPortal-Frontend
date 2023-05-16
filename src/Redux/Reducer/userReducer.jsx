import {
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAIL,
  USER_SIGNING_RESET,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_RESET,
  USER_APPLY_JOB_REQUEST,
  USER_APPLY_JOB_SUCCESS,
  USER_APPLY_JOB_FAIL,
  USER_APPLY_JOB_RESET,
  ALL_USER_LOAD_REQUEST,
  ALL_USER_LOAD_FAIL,
  ALL_USER_LOAD_RESET,
  ALL_USER_LOAD_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
} from "../Constants/userConstants";

export const userReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNING_REQUEST:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: false,
      };
    case USER_SIGNING_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_SIGNING_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case USER_SIGNING_RESET:
      return {};

    default:
      return state;
  }
};

//logout

export const userReducerLogout = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return {
        loading: true,
        userInfo: action.payload,
        isAuthenticated: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGOUT_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case USER_LOGOUT_RESET:
      return {};

    default:
      return state;
  }
};
export const userReducerProfile = (
  state = { loading: false, userInfo: null },
  action
) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { loading: true, userInfo: null };
    case USER_LOAD_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOAD_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case USER_LOAD_RESET:
      return { userInfo: null };
    default:
      return state;
  }
};

// apply for a jobReducer
export const userApplyJobReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_APPLY_JOB_REQUEST:
      return {
        loading: false,
        userJob: action.payload,
      };
    case USER_APPLY_JOB_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_APPLY_JOB_FAIL:
      return { loading: false, error: action.payload };
    case USER_APPLY_JOB_RESET:
      return {};

    default:
      return state;
  }
};

// All users Reducer
export const allUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USER_LOAD_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case ALL_USER_LOAD_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
      };
    case ALL_USER_LOAD_FAIL:
      return { loading: false, users: [], error: action.payload };
    case ALL_USER_LOAD_RESET:
      return {};

    default:
      return state;
  }
};
// Delete Users
// userDeleteReducer.js

const initialState = {
  loading: false,
  success: false,
  error: null,
};

// userDeleteReducer.js

// userDeleteReducer.js

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        userId: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userId: action.payload, // Store the userId in the state
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
