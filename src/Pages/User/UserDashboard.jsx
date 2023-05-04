import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.signIn);
  // console.log(userInfo);

  // {
  //   userInfo && userInfo.token ? (
  //     <p>User token: {userInfo.token}</p>
  //   ) : (
  //     <p>User not logged in</p>
  //   );
  // }

  return (
    <>
      <div className="text-2xl text-white">UserDashboard</div>
      {userInfo ? <>Hi</> : <h2>Bye</h2>}
    </>
  );
};

export default UserDashboard;
