import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { io } from "socket.io-client";
import { Link, NavLink } from "react-router-dom";
import { SOCEKT, URL } from "../Api/constant";
import Drawer from "react-modern-drawer";
const Header = ({ ToggleSidebar, setIsLogin }) => {
  const [notification, setNotification] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const socket = io(SOCEKT);
  const logoutbtn = () => {
    localStorage.removeItem("isLoginCheck");
    setIsLogin(localStorage.removeItem("isLoginCheck"));
    localStorage.removeItem("_userId");
    localStorage.removeItem("_tokenCode");
    if (localStorage.removeItem("isLoginCheck") === undefined) {
      navigate("/author");
    }
  };

  const notificationrender = () => {
    socket.emit("notification", {
      id: localStorage.getItem("_userId"),
    });
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    socket.on("receiveNotification", (data) => {
      setNotification(data.notification);
    });
    notificationrender();
  }, []);

  return (
    <>
      <div className="header_sec isDacktop">
        <div className="row">
          <div className="col-lg-1 text-center">
            <span
              className="fa-fw select-all fas togale"
              onClick={ToggleSidebar}
            >
              
            </span>
          </div>
          <div className="col-lg-5">
            <div class="form-group position-relative has-icon-right d-none">
              <input
                type="text"
                class="form-control"
                placeholder="Search here"
              />
              <div class="form-control-icon">
                <i class="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-1 dropDwon notification">
            <div class="buttons">
              <ul>
                <li class="subdrop">
                  <Link to="/" class="btn icon btn-primary rounded-pill notifi">
                    <i class="bi bi-bell"></i>
                    <span className="notiFicationCount">
                      {notification.length}
                    </span>
                  </Link>
                  <ul className="subDropDwn">
                    <h4 className="notifiHeading">Notifications</h4>
                    {notification.map((item, index) => (
                      <>
                        <hr></hr>
                        <li>
                          <Link to="#">{item.message}</Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1 dropDwon">
            <ul>
              <li class="subdrop">
                <div class="avatar me-3">
                  <img
                    src="https://www.sragenkab.go.id/assets/images/demo/user-8.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <ul className="subDropDwn">
                  <li>
                    <Link to="/profile">
                      <i class="icon dripicons dripicons-user"></i> Profile
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link to="/change-password">
                      <i class="bi bi-key"></i> Change Password
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link to="/dashboard">
                      <i class="icon dripicons dripicons-user-group"></i> View
                      user
                    </Link>
                  </li>
                  <span className="logout" onClick={logoutbtn}>
                    <div class="icon dripicons dripicons-exit"></div>
                    Logout
                  </span>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header class="header forMobile">
        <nav class="nav-container">
          <div class="logo">Logo</div>
          <div class="menu-icon" onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="mobileMenu"
      >
        <div className="headerMob">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <span>
            <div class="close-btn" onClick={() => setIsOpen(false)}>
              <span class="icon flaticon-multiply"></span>
            </div>
          </span>
        </div>
        <div
          class="navbar-collapse collapse clearfix"
          id="navbarSupportedContent"
        >
          <div class="sidebar-wrapper active">
            <div class="sidebar-menu">
              <ul class="menu p-0">
                <li class="d-flex justify-content-between sidebar-title">
                  Menu
                  <span>
                    <div class="close-btn" onClick={() => setIsOpen(false)}>
                      <span class="icon flaticon-multiply"></span>
                    </div>
                  </span>
                </li>
                <li class="sidebar-item">
                  <NavLink to="/author/dashboard" className="sidebar-link">
                    <i class="bi bi-grid-fill"></i>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                {/* <li class="sidebar-item">
              <NavLink to="/profile" className="sidebar-link">
                <i class="bi bi-person-check"></i>
                <span>View profile</span>
              </NavLink>
            </li> */}
                <li class="sidebar-item">
                  <NavLink to="/author/categories" className="sidebar-link">
                    <i class="bi bi-stack"></i>
                    <span>Manage Categories</span>
                  </NavLink>
                </li>
                <li class="sidebar-item">
                  <NavLink to="/author/services" className="sidebar-link">
                    <i class="bi bi-person-fill"></i>
                    <span>Services</span>
                  </NavLink>
                </li>
                {/* <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-person-fill"></i>
                <span>Manage Expert or Teacher</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-ui-radios"></i>
                <span>Manage All Registered student data</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-truck"></i>
                <span>Manage Student Assignment </span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Assignment to expert or teacher </span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Send solution to student</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Manage payment history</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Show expert earn amount</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Manage FAQ data </span>
              </NavLink>
            </li> */}
                <li class="sidebar-item">
                  <NavLink to="/author/blog" className="sidebar-link">
                    <i class="bi bi-collection-fill"></i>
                    <span>Manage blog </span>
                  </NavLink>
                </li>
                {/* <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Manage student reviews</span>
              </NavLink>
            </li>
            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-collection-fill"></i>
                <span>Add any new reviews</span>
              </NavLink>
            </li>

            <li class="sidebar-item">
              <NavLink to="#" className="sidebar-link">
                <i class="bi bi-chat-left-dots-fill"></i>
                <span>Message</span>
              </NavLink>
            </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
