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
  USER_APPLY_JOB_REQUEST,
  USER_APPLY_JOB_SUCCESS,
  USER_APPLY_JOB_FAIL,
  ALL_USER_LOAD_REQUEST,
  ALL_USER_LOAD_SUCCESS,
  ALL_USER_LOAD_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_UPDATE_LIST,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
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

export const userSignUpAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const { data } = await axios.post(
      "http://localhost:9000/api/userSignUp",
      user
    );

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    toast.success("Register Successfully!");
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
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

// All User Action
export const allUserAction = (user) => async (dispatch) => {
  dispatch({ type: ALL_USER_LOAD_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:9000/api/allUsers",
      config
    );

    dispatch({
      type: ALL_USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_LOAD_FAIL,
      payload: error.response,
    });
  }
};

// User Apply Job

export const userApplyJobAction = (job) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_APPLY_JOB_REQUEST });

    // const { userInfo } = getState().signIn;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:9000/api/user/jobHistory",
      job,
      config
    );

    dispatch({ type: USER_APPLY_JOB_SUCCESS, payload: data });
    toast.success("Job Applied Successfully!");
  } catch (error) {
    dispatch({
      type: USER_APPLY_JOB_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
    toast.error("Failed to apply for job.You Must Login First.");
    console.error(error);
  }
};

// Delete Users
// deleteUserAction.js

export const deleteUserAction = (userId) => async (dispatch) => {
  console.log("Delete User Action:", userId);
  dispatch({ type: DELETE_USER_REQUEST, payload: userId });

  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };

    await axios.delete(
      `http://localhost:9000/api/user/admin/delete/${userId}`,
      config
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: userId, // Pass the userId to the reducer
    });
    dispatch({
      type: DELETE_USER_UPDATE_LIST,
      payload: userId, // Pass the userId to update the user list
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response,
    });
  }
};

// export const deleteUserAction = (userId) => async (dispatch) => {
//   console.log("Delete User Action:", userId);
//   dispatch({ type: DELETE_USER_REQUEST });

//   try {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo?.data?.token}`,
//       },
//     };

//     await axios.delete(
//       `http://localhost:9000/api/user/admin/delete/${userId}`,
//       config
//     );

//     dispatch({
//       type: DELETE_USER_SUCCESS,
//       payload: userId, // Pass the userId to the reducer
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_USER_FAIL,
//       payload: error.response,
//     });
//   }
// };

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
