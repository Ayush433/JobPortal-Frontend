import {
  JOB_LOAD_REQUEST,
  JOB_LOAD_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SINGLE_FAIL,
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

export const jobLoadSingleAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.data?.token}`,
      },
    };
    if (!id) {
      throw new Error("Job ID is not defined");
    }

    const { data } = await axios.get(
      `https://localhost:9000/api/${id}`,
      config
    );

    dispatch({ type: JOB_LOAD_SINGLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
    console.error(error);
  }
};
