import {
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_SUCCESS,
  JOB_TYPE_LOAD_FAIL,
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
