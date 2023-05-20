import { useState } from "react";
import "./App.css";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./Pages/Login";
import Dashboard from "./Pages/User/UserDashboard";
import UserRoutes from "./Components/UserRoutes";
import Layout from "./Pages/Global/Layout";
import { ProSidebarProvider } from "react-pro-sidebar";
import UserJobsHistory from "./Pages/User/UserJobsHistory";
import UserInfoDashboard from "./Pages/User/UserInfoDashboard";
import SingleJob from "./Pages/SingleJob";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRoute from "./Components/AdminRoutes";
import DashUsers from "./Pages/Admin/DashUsers";
import DashJobs from "./Pages/Admin/Dashjobs.jsx";
import CreateJobs from "./Pages/Admin/CreateJobs";
import Registration from "./Pages/Registration";

function App() {
  return (
    <>
      <ToastContainer />
      <ProSidebarProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ProSidebarProvider>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.includes("/admin/") ||
    location.pathname.includes("/user/");
  const DashboardHOC = Layout(Dashboard);
  const UserJobsHistoryHOC = Layout(UserJobsHistory);
  const UserInfoDashboardHOC = Layout(UserInfoDashboard);
  const AdminDashboardHOC = Layout(AdminDashboard);
  const DashUsersHOC = Layout(DashUsers);
  const DashJobsHOC = Layout(DashJobs);
  const CreateJobsHOC = Layout(CreateJobs);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/job/:id" element={<SingleJob />} />
        <Route path="/search/location/:location" element={<Home />} />
        <Route path="/search/:keyword" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signUp" element={<Registration />} />
        <Route
          path="/user/dashboard"
          element={
            <UserRoutes>
              <DashboardHOC />
            </UserRoutes>
          }
        />
        <Route
          path="/user/jobs"
          element={
            <UserRoutes>
              <UserJobsHistoryHOC />
            </UserRoutes>
          }
        />
        <Route
          path="/user/info"
          element={
            <UserRoutes>
              <UserInfoDashboardHOC />
            </UserRoutes>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboardHOC />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/jobs"
          element={
            <AdminRoute>
              <DashJobsHOC />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <DashUsersHOC />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/job/create"
          element={
            <AdminRoute>
              <CreateJobsHOC />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
