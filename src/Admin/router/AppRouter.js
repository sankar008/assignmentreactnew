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
    <div className={darkMode ? "theme-dark" : ""}>
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
                  path="/dashboard"
                  element={<Base setIsLogin={setIsLogin} />}
                />
                <Route
                  path="/author"
                  element={<Base setIsLogin={setIsLogin} />}
                />
                <Route path="/table" element={<Table />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/categories" element={<Categoris />} />
                <Route path="/sub-category" element={<Subcategory />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/add" element={<AddBlog />} />
                <Route path="/blog/edit" element={<AddBlog />} />
                <Route path="/services" element={<ServicesList />} />
                <Route path="/services/add" element={<AddServices />} />
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
