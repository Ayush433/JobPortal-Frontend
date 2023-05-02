import {
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
} from "../Constants/userConstants";
import { toast } from "react-toastify";
import axios from "axios";

export const userSignInAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNING_REQUEST });

    const { data } = await axios.post(
      "http://localhost:9000/api/userLogin",
      user
    );

    dispatch({ type: USER_SIGNING_SUCCESS, payload: data });
    toast.success("Login Successfully!");
  } catch (error) {
    dispatch({
      type: USER_SIGNING_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
    toast.success(
      error.response && error.response.data
        ? error.response.data
        : error.message
    );
    console.error(error);
  }
};

export const userLogOutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:9000/api/logout");
    localStorage.removeItem("userInfo");

    dispatch({ type: USER_LOGOUT_SUCCESS, payload: data });
    toast.success("LogOut Successfully!");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
    toast.success(
      error.response && error.response.data
        ? error.response.data
        : error.message
    );
    console.error(error);
  }
};
