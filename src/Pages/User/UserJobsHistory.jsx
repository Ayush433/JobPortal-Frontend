import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";

const UserJobsHistory = () => {
  const { user } = useSelector((state) => state.userProfile);
  console.log(user);
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  return (
    <>
      <h1>UserJobsHistory</h1>
      <div>
        {user && user.jobHistory.map((history) => <h3>{history.title}</h3>)}
      </div>
    </>
  );
};

export default UserJobsHistory;
