import {
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
} from "../Constants/userConstants";
import { toast } from "react-toastify";
import axios from "axios";
import { json } from "react-router-dom";

export const userSignInAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNING_REQUEST });

    const { data } = await axios.post(
      "http://localhost:9000/api/userLogin",
      user
    );
    localStorage.setItem("userInfo", JSON.stringify(data));

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
    toast.error("Please Check you Email and Password");
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

export const userProfileAction = (user) => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:9000/api/Profile",
      config
    );

    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.response,
    });
  }
};
// export const userProfileAction = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: USER_LOAD_REQUEST });

//     const { userLogin } = getState();

//     if (!userLogin) {
//       throw new Error("User not logged in");
//     }

//     const {
//       userInfo: { token },
//     } = userLogin;

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.get(
//       "http://localhost:9000/api/Profile",
//       config
//     );

//     dispatch({
//       type: USER_LOAD_SUCCESS,
//       payload: { user: data },
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: USER_LOAD_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
