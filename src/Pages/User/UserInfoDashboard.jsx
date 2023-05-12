import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfoDashboard = () => {
  const { userInfo } = useSelector((state) => state.userProfile);
  console.log(userInfo);

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <h1
          className="text-center text-4xl font -bold  text-white mr-7"
          id="name"
        >
          {" "}
          Who I am{" "}
        </h1>
        <div className="h-[370px] w-[390px] mt-7 border-cyan-400 bg-black rounded-full text-white flex flex-col justify-center  items-center border-4 ">
          <div>
            <div className="flex justify-center h-[120px]">
              {" "}
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" />
            </div>
            <div className="ml-8 text-[17px]">
              <h1>Name:{userInfo?.user?.fullName}</h1>
              <h1>Email: {userInfo?.user?.email}</h1>
              <h1>
                Status : {userInfo?.user?.role === 0 ? "Regular User" : "Admin"}
              </h1>
              {/* <h1>Location: Balkumati Lalitpur</h1>
              <h1>Contact: 9867754739</h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoDashboard;
