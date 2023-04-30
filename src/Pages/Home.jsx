import React from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jobLoadAction } from "../Redux/actions/jobAction";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );
  const dispatch = useDispatch();

  const { keyword, location } = useParams;
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

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
        </a>
      </div>
      {/* jobs hmro backend aba ako object sanga exact match grna parxa backend mah jobs vani array vitrw object haru xan jasma jobs array ko title auta object ho  */}
      {/* <div>{jobs && jobs.map((job) => <h1>{job.title}</h1>)}</div>  */}
      <div className="grid grid-rows-3 gap-4">
        {jobs &&
          jobs.map((job) => {
            return (
              <div class=" w-[700px] ml-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <svg
                  class="w-6 h-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg> */}

                  {/* <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path> */}
                </svg>

                <i class="fa-solid fa-location-dot text-blue-700 text-[15px]">
                  {job.location}
                </i>

                <div className="">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {job.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {job.description}
                  </p>
                  <button
                    type="button"
                    class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <i class="fa-solid fa-plus pr-4"></i>
                    Read More
                  </button>
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
