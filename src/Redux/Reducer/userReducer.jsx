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
