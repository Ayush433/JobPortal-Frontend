import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import moment from "moment";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userProfile);
  console.log(userInfo);

  return (
    <>
      <>
        <div>
          <h1 className="text-white pb-4 text-2xl"> User Dashboard</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 w-[1000px] h-[190px] ml-[20px] ">
          <div className=" bg-blue-800  rounded-[20px] p-4">
            <CalendarMonthTwoToneIcon style={{ fontSize: 40 }} />
            <div className="mt-[10px] text-white  ">Member Since</div>
            <div className="text-white  pt-3">
              {moment(userInfo?.user?.createdAt).format(`YYYY / MM / DD`)}
            </div>
          </div>

          <div className=" bg-blue-800 rounded-[20px] p-4">
            <WorkOutlineIcon style={{ fontSize: 40 }} />
            <div className="text-white pt-2 text-xl">
              {userInfo?.user?.jobHistory.length}
            </div>
            <div className="mt-[10px] text-white ">
              <h2>No of Jobs Submitted</h2>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default UserDashboard;
