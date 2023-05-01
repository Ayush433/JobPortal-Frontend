import {
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAIL,
  USER_SIGNING_RESET,
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
