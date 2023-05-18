import React from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jobLoadAction } from "../Redux/actions/jobAction";
import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  Box,
  Card,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import SelectComponent from "../Components/SelectComponent";
import { jobTypeLoadAction } from "../Redux/actions/jobTypeAction";

const Home = () => {
  const { jobs, pages, loading } = useSelector((state) => state.loadJobs);
  // console.log(jobs);

  const dispatch = useDispatch();

  const { keyword, location } = useParams;
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);
  if (loading) {
    return (
      <div className="h-[600px]">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_octtoqca.json"
          background="transparent"
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="pt-[15px]">
        <a
          href="#"
          className="block max-w-[270px] p-3 ml-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-blue-700 dark:text-white">
            Filter By Category
          </h5>
          <SelectComponent
            handleChangeCategory={handleChangeCategory}
            cat={cat}
          />
        </a>
      </div>
      {/* jobs hmro backend aba ako object sanga exact match grna parxa backend mah jobs vani array vitrw object haru xan jasma jobs array ko title auta object ho  */}
      {/* <div>{jobs && jobs.map((job) => <h1>{job.title}</h1>)}</div>  */}
      {}
      <div className="grid grid-rows-3 gap-4">
        {jobs &&
          jobs.map((job, i) => {
            return (
              <div className=" w-[700px] ml-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>

                <i
                  className="fa-solid fa-location-dot text-blue-700 text-[15px]"
                  key={job.location}
                >
                  {job.location}
                </i>

                <div className="">
                  <Link to={`/job/${job._id}`}>
                    <h5
                      className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                      key={job.title}
                    >
                      {job.title}
                    </h5>
                  </Link>

                  <p
                    className="mb-3 font-normal text-gray-500 dark:text-gray-400"
                    key={job.description}
                  >
                    {job.description}
                  </p>
                  <NavLink
                    type="button"
                    to={`/job/${job._id}`}
                    className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <i className="fa-solid fa-plus pr-4"></i>
                    Read More
                  </NavLink>
                </div>
              </div>
            );
          })}
        <div className="ml-[700px] text-xl py-2 px-4 rounded-lg ">
          <Stack spacing={2}>
            <Pagination
              page={page}
              count={pages === 0 ? 1 : pages}
              onChange={(event, value) => {
                setPage(value);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
