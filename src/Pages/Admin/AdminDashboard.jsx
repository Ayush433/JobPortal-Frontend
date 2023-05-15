import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CategoryIcon from "@mui/icons-material/Category";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import moment from "moment";
import ChartComponent from "../../Components/ChartComponent";
import { data, options } from "./Data/data";
import { Chart } from "react-google-charts";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userProfile);
  console.log(userInfo);

  return (
    <>
      <>
        <div>
          <h1 className="text-white pb-4 text-2xl"> Admin Dashboard</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[1060px] h-[170px] ml-[20px] ">
          <div className=" bg-blue-800  rounded-[20px] p-4">
            <SupervisorAccountIcon style={{ fontSize: 40 }} />
            <div className="text-white  pt-3 font-extrabold text-2xl">1780</div>
            <div className="mt-[10px] text-blue-400 font-bold	  ">
              Administration{" "}
            </div>
          </div>

          <div className=" bg-blue-800 rounded-[20px] p-4">
            <WorkOutlineIcon style={{ fontSize: 40 }} />
            <div className="text-white  pt-3 font-extrabold text-2xl">450</div>
            <div className="mt-[10px] text-blue-400 font-bold ">
              <h2>Jobs</h2>
            </div>
          </div>
          <div className=" bg-blue-800 rounded-[20px] p-4">
            <CategoryIcon style={{ fontSize: 40 }} />
            <div className="text-white  pt-3 font-extrabold text-2xl">6547</div>
            <div className="mt-[10px] text-blue-400 font-bold ">
              <h2>Jobs Categories</h2>
            </div>
          </div>
        </div>
      </>
      <ChartComponent>
        <Chart
          chartType="Bar"
          data={data}
          options={options}
          width="100%"
          height="300px"
          legendToggle
        />
      </ChartComponent>
    </>
  );
};

export default AdminDashboard;
