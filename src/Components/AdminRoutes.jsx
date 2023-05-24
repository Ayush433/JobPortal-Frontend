import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.signIn);
  console.log("User Detail ", userInfo);
  return userInfo?.data?.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
