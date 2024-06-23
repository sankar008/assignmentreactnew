import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import * as API from "../api/index";
const Header = ({ tableData }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const [isMegaMenu, setIsMegaMenu] = React.useState([]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const catagoriWisesub = async (data) => {
    const response = await API.catagoriBySubcatagori(data);
    console.log("response", response);
    setIsMegaMenu(response.data.data);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    // const mm = new Mmenu(menuRef.current, {
    //   extensions: ["theme-dark", "pagedim-black"],
    //   setSelected: true,
    //   counters: true,
    //   iconPanels: true,
    //   navbars: [
    //     {
    //       position: "top",
    //       content: ["searchfield"],
    //     },
    //     {
    //       position: "top",
    //       content: ["prev", "title", "close"],
    //     },
    //   ],
    // });
    // return () => {
    //   mm.API.close();
    // };
  }, []);
  return (
    <div>
      <div className="freeQuot">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <p className="textG">Guaranteed Higher Grade!</p>
            </div>
            <div className="col-5">
              <Link to="/" className="orderNowM">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="feader_fix">
        <header class="main-header">
          <div class="header-upper">
            <div class="outer-container clearfix">
              <div class="pull-left logo-box">
                <div class="logo">
                  <a href="#">logo</a>
                </div>
              </div>
              <div class="nav-outer clearfix">
                <nav class="main-menu navbar-expand-md">
                  <div
                    class="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul class="navigation clearfix">
                      <li class="dropdown has-mega-menu">
                        <a href="#">
                          <span>
                            Courses <i class="fa fa-arrow-down"></i>
                          </span>
                        </a>
                        <div class="mega-menu d-none">
                          <div class="upper-box">
                            <div class="page-links-box">
                              <a href="course.html" class="link">
                                <span class="icon flaticon-bullhorn"></span>
                                Marketing
                              </a>
                              <a href="course-2.html" class="link">
                                <span class="icon flaticon-cyclist"></span>
                                Lifestyle
                              </a>
                              <a href="course-3.html" class="link">
                                <span class="icon flaticon-bar-chart"></span>
                                Business
                              </a>
                              <a href="course-4.html" class="link">
                                <span class="icon flaticon-software"></span>
                                Software
                              </a>
                              <a href="course-3.html" class="link">
                                <span class="icon flaticon-atom"></span>Science
                              </a>
                              <a href="course.html" class="link">
                                <span class="icon flaticon-webpage"></span>IT
                                Management
                              </a>
                              <a href="course-2.html" class="link">
                                <span class="icon flaticon-language"></span>
                                Language
                              </a>
                              <a href="course-3.html" class="link">
                                <span class="icon flaticon-team"></span>Human
                                Resources
                              </a>
                              <a href="course-4.html" class="link">
                                <span class="icon flaticon-healthcare"></span>
                                Health Care
                              </a>
                            </div>
                          </div>
                          <div class="lower-box">
                            <h3>Become an Instructor</h3>
                            <div class="text">
                              Top instructors from around the Neque convallis a
                              cras semper auctor. <br /> Libero id faucibus nisl
                              tincidunt egetnvallis{" "}
                            </div>
                            <div class="btn-box">
                              <a href="#" class="theme-btn btn-style-five">
                                Start teaching today
                              </a>
                            </div>
                            <div class="side-icon">
                              <img
                                src="images/resource/mega-menu-icon.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <div class="stellarnav">
                        <ul>
                          <li class="current dropdown">
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li class="dropdown">
                            <NavLink to="/how-it-work">How Its Work</NavLink>
                          </li>
                          <li className="has-sub">
                            <NavLink href="">Services</NavLink>
                            <ul>
                              {tableData.map((item, index) => (
                                <li
                                  className="has-sub"
                                  key={index}
                                  onMouseOver={() => catagoriWisesub(item._id)}
                                >
                                  <Link to="#">{item.name}</Link>
                                  <ul>
                                    {isMegaMenu.map((secound, index) => (
                                      <li className="has-sub" key={index}>
                                        <Link to="#">{secound.name}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li class="dropdown">
                            <Link to="/benifits">Benefits </Link>
                          </li>
                          <li class="dropdown">
                            <Link to="/review">Review</Link>
                          </li>
                          <li class="dropdown">
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li class="dropdown ">
                            <NavLink to="/about-us">About</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog">Blog</NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* <li>
                    <a href="contact.html">Contact</a>
                  </li> */}
                    </ul>
                  </div>
                </nav>

                <div class="outer-box clearfix pt-1">
                  <ul class="social-box">
                    <h4>logo</h4>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="sticky-header">
            <div class="auto-container clearfix">
              <div class="logo pull-left">
                <a href="index.html" title="">
                  <img src="images/logo.png" alt="" title="" />
                </a>
              </div>
              <div class="pull-right">
                <nav class="main-menu"></nav>
                <div class="outer-box clearfix"></div>
              </div>
            </div>
          </div> */}
        </header>
      </div>
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
          <ul class="navigation clearfix">
            <li class="dropdown has-mega-menu">
              <a href="#">
                <span>
                  Courses <i class="fa fa-arrow-down"></i>
                </span>
              </a>
              <div class="mega-menu d-none">
                <div class="upper-box">
                  <div class="page-links-box">
                    <a href="course.html" class="link">
                      <span class="icon flaticon-bullhorn"></span>
                      Marketing
                    </a>
                    <a href="course-2.html" class="link">
                      <span class="icon flaticon-cyclist"></span>
                      Lifestyle
                    </a>
                    <a href="course-3.html" class="link">
                      <span class="icon flaticon-bar-chart"></span>
                      Business
                    </a>
                    <a href="course-4.html" class="link">
                      <span class="icon flaticon-software"></span>
                      Software
                    </a>
                    <a href="course-3.html" class="link">
                      <span class="icon flaticon-atom"></span>Science
                    </a>
                    <a href="course.html" class="link">
                      <span class="icon flaticon-webpage"></span>IT Management
                    </a>
                    <a href="course-2.html" class="link">
                      <span class="icon flaticon-language"></span>
                      Language
                    </a>
                    <a href="course-3.html" class="link">
                      <span class="icon flaticon-team"></span>Human Resources
                    </a>
                    <a href="course-4.html" class="link">
                      <span class="icon flaticon-healthcare"></span>
                      Health Care
                    </a>
                  </div>
                </div>
                <div class="lower-box">
                  <h3>Become an Instructor</h3>
                  <div class="text">
                    Top instructors from around the Neque convallis a cras
                    semper auctor. <br /> Libero id faucibus nisl tincidunt
                    egetnvallis{" "}
                  </div>
                  <div class="btn-box">
                    <a href="#" class="theme-btn btn-style-five">
                      Start teaching today
                    </a>
                  </div>
                  <div class="side-icon">
                    <img src="images/resource/mega-menu-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li class="current dropdown">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li class="dropdown">
              <Link onClick={() => setIsOpen(false)} to="/how-it-work">
                How It Works
              </Link>
            </li>

            <li class="dropdown">
              <Link className="arrowDwn" to="#">
                Services{" "}
                <span
                  class="fa fa-angle-down"
                  onClick={() => setDropDown(!dropDown)}
                ></span>
              </Link>
              <ul className={dropDown ? "submenuMO" : "d-none"}>
                <li>
                  <Link to="#" onClick={() => setIsOpen(false)}>
                    Sub 1
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => setIsOpen(false)}>
                    Sub 1
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => setIsOpen(false)}>
                    Sub 1
                  </Link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <Link onClick={() => setIsOpen(false)} to="/benifits">
                Benefits
              </Link>
            </li>
            <li class="dropdown">
              <Link onClick={() => setIsOpen(false)} to="/review">
                review
              </Link>
            </li>
            <li class="dropdown">
              <Link onClick={() => setIsOpen(false)} to="/faq">
                Faq
              </Link>
            </li>
            <li class="dropdown ">
              <NavLink onClick={() => setIsOpen(false)} to="/about-us">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsOpen(false)} to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="/login">
                Login
              </a>
            </li>
            <li>
              <div class="btn-box">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/"
                  class="theme-btn btn-style-two text-center text-light"
                >
                  <span class="txt">Order Now</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
