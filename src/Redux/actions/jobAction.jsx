import {
  JOB_LOAD_REQUEST,
  JOB_LOAD_SUCCESS,
  JOB_LOAD_FAIL,
} from "../Constants/jobconstants";
import axios from "axios";

export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
      // console.log(
      //   `http://localhost:9000/jobs/show?pageNumber=${pageNumber}&Keyword=${keyword}&categ=${cat}&location=${location}`
      // );
      // await axios.get(
      //   `http://localhost:9000/jobs/show?pageNumber=${pageNumber}&Keyword=${keyword}&categ=${cat}&location=${location}`
      // );

      await axios.get(
        `http://localhost:9000/jobs/show?pageNumber=${pageNumber}&Keyword=${keyword}&categ=${cat}&location=${location}`
      );
      dispatch({ type: JOB_LOAD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: JOB_LOAD_FAIL, payload: error.response.data.error });
    }
  };
