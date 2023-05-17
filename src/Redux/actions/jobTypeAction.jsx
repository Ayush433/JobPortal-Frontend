import {
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_SUCCESS,
  JOB_TYPE_LOAD_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAIL,
} from "../Constants/jobTypeConstants";
import axios from "axios";

export const jobTypeLoadAction = () => async (dispatch) => {
  try {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });

    const { data } = await axios.get("http://localhost:9000/api/jobs");

    dispatch({ type: JOB_TYPE_LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_LOAD_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
    console.error(error);
  }
};

export const deleteJobAction = (jobId) => async (dispatch) => {
  dispatch({ type: DELETE_JOB_REQUEST });

  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };
    await axios.delete(`http://localhost:9000/jobs/delete/${jobId}`, config);

    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: jobId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response?.data?.message || "Server Error",
    });
  }
};
