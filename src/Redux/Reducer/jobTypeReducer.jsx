import {
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_SUCCESS,
  JOB_TYPE_LOAD_FAIL,
  JOB_TYPE_LOAD_RESET,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAIL,
} from "../Constants/jobTypeConstants";

export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
  switch (action.type) {
    case JOB_TYPE_LOAD_REQUEST:
      return { loading: true };
    case JOB_TYPE_LOAD_SUCCESS:
      return {
        loading: false,
        jobType: action.payload.jobT,
      };
    case JOB_TYPE_LOAD_FAIL:
      return { loading: false, error: action.payload };
    case JOB_TYPE_LOAD_RESET:
      return {};

    default:
      return state;
  }
};

const initialState = {
  deleting: false,
  error: null,
};

export const deleteJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_JOB_REQUEST:
      return {
        ...state,
        deleting: true,
        error: null,
      };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        deleting: false,
      };
    case DELETE_JOB_FAIL:
      return {
        ...state,
        deleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
