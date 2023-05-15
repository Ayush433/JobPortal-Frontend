import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
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

function App() {
  const [count, setCount] = useState(0);
  const DashboardHOC = Layout(Dashboard);
  const UserJobsHistoryHOC = Layout(UserJobsHistory);
  const UserInfoDashboardHOC = Layout(UserInfoDashboard);
  const AdminDashboardHOC = Layout(AdminDashboard);
  const DashUsersHOC = Layout(DashUsers);

  return (
    <>
      <ToastContainer />
      <ProSidebarProvider>
        <BrowserRouter>
          <Navbar />
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/location/:location" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="*" element={<NotFound />} />
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
              path="/admin/users"
              element={
                <AdminRoute>
                  <DashUsersHOC />
                </AdminRoute>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/job/:id" element={<SingleJob />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProSidebarProvider>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Home />
      <NotFound /> */}
    </>
  );
}

export default App;
