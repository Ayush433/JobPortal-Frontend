import React from "react";
import Header from "../Components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { jobLoadAction } from "../Redux/actions/jobAction";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
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
          className="block max-w-[270px] p-3 ml-52 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-blue-700 dark:text-white">
            Filter By Category
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Home;
