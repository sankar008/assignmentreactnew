import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../components/Base";
import SidBar from "../components/SidBar";
import Header from "../components/Header";
import Table from "../components/Table";
import Login from "../page/Login";
import Profile from "../page/Profile";
import ForgotPassword from "../page/ForgotPassword";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";
import { SOCEKT, URL } from "../Api/constant";
import { useEffect } from "react";
import Categoris from "../page/Blog/Categoris";
import Blog from "../page/Blog/Blog";
import AddBlog from "../page/Blog/AddBlog";
import AddServices from "../page/Services/AddServices";
import ServicesList from "../page/Services/ServicesList";
import Subcategory from "../page/Blog/Subcategory";
import Expart from "../page/Expart/Expart";
import AddExpert from "../page/Expart/AddExpert";
import Assignments from "../page/Assiments/Assignments";
import AssignmentDetails from "../page/Assiments/AssignMentsDetails";
import AddGroup from "../page/Group/AddGroup";
import Group from "../page/Group/Group";
const AdminRoute = () => {
  const [notification, setNotification] = useState([]);
  const socket = io(SOCEKT);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(localStorage.getItem("darkThem"));

  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLoginCheck"))
  );

  // ? MENU TOGGLE HIDE AND SHOW
  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const notificationrender = () => {
    socket.emit("notification", {
      id: localStorage.getItem("_userId"),
    });
  };
  useEffect(() => {
    socket.on("receiveNotification", (data) => {
      setNotification(data.notification);
    });
    notificationrender();
  }, []);

  return (
    <div className={darkMode ? "theme-dark" : "theme-dark"}>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <>
            <SidBar
              isOpen={isOpen}
              darkMode={darkMode}
              setdarkMode={setdarkMode}
            />
            <div id="main">
              <header class="mb-3">
                <Header
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  ToggleSidebar={ToggleSidebar}
                  notification={notification}
                />
              </header>
              <Routes>
                <Route
                  path="/author/dashboard"
                  element={<Base setIsLogin={setIsLogin} />}
                />
                <Route
                  path="/author/dashboard"
                  element={<Base setIsLogin={setIsLogin} />}
                />
                <Route path="/author/table" element={<Table />} />
                <Route path="/author/profile" element={<Profile />} />
                <Route path="/author/categories" element={<Categoris />} />
                <Route path="/author/sub-category" element={<Subcategory />} />
                <Route path="/author/blog" element={<Blog />} />
                <Route path="/author/blog/add" element={<AddBlog />} />
                <Route path="/author/blog/edit" element={<AddBlog />} />
                <Route path="/author/services" element={<ServicesList />} />
                <Route path="/author/services/add" element={<AddServices />} />
                <Route path="/author/services/edit" element={<AddServices />} />
                <Route path="/author/group/add" element={<AddGroup />} />
                <Route path="/author/group/edit" element={<AddGroup />} />
                <Route path="/author/group" element={<Group />} />

                <Route path="/author/expert" element={<Expart />} />
                <Route path="/author/expert/add" element={<AddExpert />} />
                <Route path="/author/expert/edit" element={<AddExpert />} />
                <Route path="/author/assignment" element={<Assignments />} />
                <Route
                  path="/author/assignment-details"
                  element={<AssignmentDetails />}
                />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route
              path="/author"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route
              path="/forgot-password"
              element={
                <ForgotPassword isLogin={isLogin} setIsLogin={setIsLogin} />
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default AdminRoute;
