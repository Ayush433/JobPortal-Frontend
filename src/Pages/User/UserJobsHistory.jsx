import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";

const UserJobsHistory = () => {
  const { userInfo } = useSelector((state) => state.userProfile);
  console.log(userInfo);

  return (
    <>
      <div>
        {userInfo?.user?.jobHistory?.map((history) => {
          return (
            <div className=" w-[600px] ml-[50px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>

              <i
                className="fa-solid fa-location-dot text-blue-700 text-[15px]"
                key={history.location}
              >
                {history.location}
              </i>

              <div className="">
                <a href="#">
                  <h5
                    className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    key={history.title}
                  >
                    {history.title}
                  </h5>
                </a>
                <p
                  className="mb-3 font-normal text-gray-500 dark:text-gray-400"
                  key={history.description}
                >
                  {history.description}
                </p>
                <button
                  type="button"
                  className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-plus pr-4"></i>
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserJobsHistory;
