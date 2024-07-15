import React, { useEffect, useState } from "react";
import OrderFrom from "../components/OrderFrom";
import { Typewriter } from "react-simple-typewriter";
import OwlCarousel from "react-owl-carousel";
import Testimonial from "../components/Testimonial";
import { useParams } from "react-router";
import Carousal from "../components/Carousal";
import * as API from "../api/index";
import { IMG } from "../api/constant";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Blog = () => {
  const param = useParams();
  const [blogCata, setBlogCata] = useState([]);

  const [tableData, setTableData] = useState([]);
  console.log("tableData", tableData);
  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_blog();
      setTableData(response.data.data);
      const cataresponse = await API.catagori_listing();
      setBlogCata(cataresponse.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getdetailsData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="innerBanner banner-section-three"
        style={{
          backgroundImage: `url(https://theuniversalitservices.com/wp-content/uploads/2022/01/Blog-Page-Banner.jpg)`,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <h1 class="text_center479">
                Get Personalized <br />
                <span className="typingColor">
                  <Typewriter
                    words={[
                      "Lab Reports",
                      "Presentations",
                      "Project Reports",
                      "Live Sessions",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />{" "}
                </span>
                <br />
                available24X7
              </h1>
              <div className="sidebar ">
                <OwlCarousel
                  className="testimonial-carousel bannerCros"
                  loop
                  margin={10}
                  autoplay={true}
                  items={1}
                  dots={false}
                  responsiveClass={true}
                  autoplaySpeed={5000}
                >
                  <div class="item">
                    <div class="sidebar-widget popular-posts">
                      <div class="widget-content">
                        <article class="post">
                          <figure class="post-thumb">
                            <img
                              src="images/resource/post-thumb-3.jpg"
                              alt=""
                            />
                            <a href="#" class="overlay-box">
                              <span class="icon fa fa-link"></span>
                            </a>
                          </figure>
                          <div class="text">
                            <a href="#">Is Baking a Good career? 15 Reasons </a>
                          </div>
                          <div class="post-info">Admin, 10 Feb 2023</div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="sidebar-widget popular-posts">
                      <div class="widget-content">
                        <article class="post">
                          <figure class="post-thumb">
                            <img
                              src="images/resource/post-thumb-3.jpg"
                              alt=""
                            />
                            <a href="#" class="overlay-box">
                              <span class="icon fa fa-link"></span>
                            </a>
                          </figure>
                          <div class="text">
                            <a href="#">Is Baking a Good career? 15 Reasons </a>
                          </div>
                          <div class="post-info">Admin, 10 Feb 2023</div>
                        </article>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-6">
              <OrderFrom />
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="content-side border_right_blog col-lg-9 col-md-12 col-sm-12">
              <div class="row">
                <h2 className="blogheadding">Tutoritan Blog</h2>
                <div class="col-lg-7">
                  {tableData.length === 0 ? (
                    "loader"
                  ) : (
                    <>
                      <div class="blog-classic">
                        <div class="news-block-two">
                          <div class="inner-box">
                            <div class="image">
                              <Link to="/blog-details">
                                <img src={IMG + tableData[0].image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content">
                              <ul class="post-info">
                                <li>
                                  <a href="#">
                                    <span class="icon fa fa-user"></span>Admin
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="icon fa fa-calendar"></span>
                                    {moment(tableData[0].createdAt).format(
                                      "MMMM Do YYYY"
                                    )}
                                  </a>
                                </li>
                                {/* <li>
                                  <a href="#">
                                    <span class="icon fa fa-bookmark-o"></span>
                                    {tableData[0].categories.name}
                                  </a>
                                </li> */}
                              </ul>
                              <h2 class="fa-2x">
                                <Link to="/blog-details">
                                  {tableData[0].title}
                                </Link>
                              </h2>
                              <div class="text">{tableData[0].shortDes}</div>
                              <Link to="/blog-details" class="learn-more">
                                Learn More{" "}
                                <span class="icon flaticon-right-arrow-1"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div class="col-lg-5 sidebar">
                  <div class="sidebar-widget innerSidebar popular-posts">
                    <div class="widget-content">
                      {tableData.length === 0 ? (
                        "Loader..."
                      ) : (
                        <>
                          {tableData.map((item, index) => (
                            <article class="post">
                              <figure class="post-thumb">
                                <img src={IMG + item.image} alt="" />
                                <Link to="#" class="overlay-box">
                                  <span class="icon fa fa-link"></span>
                                </Link>
                              </figure>
                              <div class="text">
                                <Link to="#">{item.title}</Link>
                              </div>
                              <div class="post-info">
                                Admin,{" "}
                                {moment(item.createdAt).format("MMMM Do YYYY")}
                              </div>
                            </article>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousal">
                <h2 className="blogheadding">Tutoritan Categories</h2>

                <OwlCarousel
                  className="testimonial-carousel"
                  loop
                  margin={10}
                  autoplay={true}
                  items={5}
                  dots={false}
                  responsiveClass={true}
                  autoplaySpeed={5000}
                >
                  {/* <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <Link to="#">
                              <img src="{IMG + item.image}" alt="" />
                            </Link>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <Link to="#">dgsdgadgfa</Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {tableData.map((item, index) => (
                    <div class="item" key={index}>
                      <div class="blog-classic mt-0">
                        <div class="news-block-two">
                          <div class="inner-box">
                            <div class="image">
                              <Link to="#">
                                <img src={IMG + item.image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content p-2">
                              <h2 class="fa">
                                <Link to="#">{item.title}</Link>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>

                <OwlCarousel
                  className="testimonial-carousel"
                  loop
                  margin={10}
                  autoplay={true}
                  items={2}
                  dots={false}
                  responsiveClass={true}
                  autoplaySpeed={5000}
                >
                  {tableData.map((item, index) => (
                    <div class="item">
                      <div class="blog-classic mt-0">
                        <div class="news-block-two">
                          <div class="inner-box">
                            <div class="image">
                              <Link to="#">
                                <img src={IMG + item.image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content p-2">
                              <h2 class="fa">
                                <Link to="#">{item.title}</Link>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>

              <div class="row">
                <div class="col-lg-7">
                  {tableData.length === 0 ? (
                    "loader"
                  ) : (
                    <>
                      <div class="blog-classic">
                        <div class="news-block-two">
                          <div class="inner-box">
                            <div class="image">
                              <Link to="/blog-details">
                                <img src={IMG + tableData[0].image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content">
                              <ul class="post-info">
                                <li>
                                  <a href="#">
                                    <span class="icon fa fa-user"></span>Admin
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="icon fa fa-calendar"></span>
                                    {moment(tableData[0].createdAt).format(
                                      "MMMM Do YYYY"
                                    )}
                                  </a>
                                </li>
                                {/* <li>
                                  <a href="#">
                                    <span class="icon fa fa-bookmark-o"></span>
                                    {tableData[0].categories.name}
                                  </a>
                                </li> */}
                              </ul>
                              <h2 class="fa-2x">
                                <Link to="/blog-details">
                                  {tableData[0].title}
                                </Link>
                              </h2>
                              <div class="text">{tableData[0].shortDes}</div>
                              <Link to="/blog-details" class="learn-more">
                                Learn More{" "}
                                <span class="icon flaticon-right-arrow-1"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div class="col-lg-5 sidebar">
                  <div class="sidebar-widget innerSidebar popular-posts">
                    <div class="widget-content">
                      {tableData.length === 0 ? (
                        "Loader..."
                      ) : (
                        <>
                          {tableData.map((item, index) => (
                            <article class="post">
                              <figure class="post-thumb">
                                <img src={IMG + item.image} alt="" />
                                <Link to="#" class="overlay-box">
                                  <span class="icon fa fa-link"></span>
                                </Link>
                              </figure>
                              <div class="text">
                                <Link to="#">{item.title}</Link>
                              </div>
                              <div class="post-info">
                                Admin,{" "}
                                {moment(item.createdAt).format("MMMM Do YYYY")}
                              </div>
                            </article>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="blogheadding">Word Form customers says</h2>
                <Carousal />
              </div>
            </div>

            <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
              <aside class="sidebar sticky-top">
                <div class="sidebar-widget links-widget">
                  <div class="sidebar-title">
                    <h4>All Categories</h4>
                  </div>
                  <div class="widget-content">
                    <ul class="blog-cat">
                      {blogCata.length === 0 ? (
                        "Loader..."
                      ) : (
                        <>
                          {blogCata.map((item, index) => (
                            <li key={index}>
                              <Link to="#">
                                {item.useFor === "1" ? item.name : ""}{" "}
                              </Link>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div class="widget-content">
                    {tableData.length === 0 ? (
                      "Loader..."
                    ) : (
                      <>
                        {tableData.map((item, index) => (
                          <article class="post">
                            <figure class="post-thumb">
                              <img src={IMG + item.image} alt="" />
                              <a href="#" class="overlay-box">
                                <span class="icon fa fa-link"></span>
                              </a>
                            </figure>
                            <div class="text">
                              <a href="#">{item.title}</a>
                            </div>
                            <div class="post-info">
                              Admin,{" "}
                              {moment(item.createdAt).format("MMMM Do YYYY")}
                            </div>
                          </article>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Popular Post</h4>
                  </div>
                  <div class="widget-content">
                    {tableData.length === 0 ? (
                      "Loader..."
                    ) : (
                      <>
                        {tableData.map((item, index) => (
                          <article class="post">
                            <figure class="post-thumb">
                              <img src={IMG + item.image} alt="" />
                              <a href="#" class="overlay-box">
                                <span class="icon fa fa-link"></span>
                              </a>
                            </figure>
                            <div class="text">
                              <a href="#">{item.title}</a>
                            </div>
                            <div class="post-info">
                              Admin,{" "}
                              {moment(item.createdAt).format("MMMM Do YYYY")}
                            </div>
                          </article>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
