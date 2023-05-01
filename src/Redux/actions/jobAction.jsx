import {
  JOB_LOAD_REQUEST,
  JOB_LOAD_SUCCESS,
  JOB_LOAD_FAIL,
} from "../Constants/jobconstants";
import axios from "axios";

export const jobLoadAction =
  (page, keyword, cat, location) => async (dispatch) => {
    try {
      dispatch({ type: JOB_LOAD_REQUEST });

      const { data } = await axios.get(
        `http://localhost:9000/jobs/show?pageNumber=${page}&Keyword=${keyword}&location=${location}&categ${cat}`
      );

      dispatch({ type: JOB_LOAD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
      console.error(error);
    }
  };
