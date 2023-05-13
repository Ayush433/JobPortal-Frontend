import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobLoadSingleAction } from "../Redux/actions/jobAction";
import { userApplyJobAction } from "../Redux/actions/userAction";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { singleJob, isLoading } = useSelector((state) => state.singleJob);

  console.log(singleJob);
  const { id } = useParams();
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const applyForJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob?.title,
        description: singleJob && singleJob?.description,
        salary: singleJob && singleJob?.salary,
        location: singleJob && singleJob?.location,
      })
    );
  };
  return (
    <>
      <div className="pt-10">
        <div className=" bg-neutral-300 rounded-[20px] p-4 w-[60%] h-[300px] m-auto">
          <div className="mt-[10px] text-black text-2xl ">
            {singleJob?.title}
          </div>
          <div className="text-black font-bold pt-2">
            Salary: Rs{singleJob?.salary}
          </div>
          <div className="text-black font-bold pt-2">
            Location: {singleJob?.location}
          </div>
          <div className="text-black font-bold pt-2">
            {singleJob?.description}
          </div>
          <div className="font-bold pt-2 mt-[40px] ml-[600px]">
            <button
              type="button"
              onClick={applyForJob}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Applied For the Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
