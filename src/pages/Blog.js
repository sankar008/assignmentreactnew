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
import OrderaType from "../components/OrderaType";
import BlogSidBar from "./BlogSidBar";
const Blog = () => {
  const param = useParams();
  const [blogCata, setBlogCata] = useState([]);

  const [tableData, setTableData] = useState([]);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_blog();
      setTableData(response.data.data);
      const cataresponse = await API.catagori_listing();
      console.log("cataresponse", cataresponse);
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
                  {tableData.map((item, index) => (
                    <div class="item">
                      <div class="sidebar-widget popular-posts">
                        <div class="widget-content">
                          <article class="post">
                            <figure class="post-thumb">
                              <img src={IMG + item.image} alt="" />
                              <Link
                                to={`/blog-details/${item.slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                                class="overlay-box"
                              >
                                <span class="icon fa fa-link"></span>
                              </Link>
                            </figure>
                            <div class="text">
                              <Link
                                to={`/blog-details/${item.slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                              >
                                {item.title}
                              </Link>
                            </div>
                            <div class="post-info">
                              Admin,{" "}
                              {moment(item.createdAt).format("MMMM Do YYYY")}
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-6">
              <OrderaType />
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
                              <Link
                                to={`/blog-details/${tableData[0].slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                              >
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
                                <Link
                                  to={`/blog-details/${tableData[0].slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {tableData[0].title}
                                </Link>
                              </h2>
                              <div class="text">{tableData[0].shortDes}</div>
                              <Link
                                to={`/blog-details/${tableData[0].slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                                class="learn-more"
                              >
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
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                  class="overlay-box"
                                >
                                  <span class="icon fa fa-link"></span>
                                </Link>
                              </figure>
                              <div class="text">
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {item.title}
                                </Link>
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
                              <Link
                                to={`/blog-details/${item.slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                              >
                                <img src={IMG + item.image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content p-2">
                              <h2 class="fa">
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {item.title}
                                </Link>
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
                              <Link
                                to={`/blog-details/${item.slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                              >
                                <img src={IMG + item.image} alt="" />
                              </Link>
                            </div>
                            <div class="lower-content p-2">
                              <h2 class="fa">
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {item.title}
                                </Link>
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
                              <Link
                                to={`/blog-details/${tableData[0].slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                              >
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
                                <Link
                                  to={`/blog-details/${tableData[0].slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {tableData[0].title}
                                </Link>
                              </h2>
                              <div class="text">{tableData[0].shortDes}</div>
                              <Link
                                to={`/blog-details/${tableData[0].slug}`}
                                state={{
                                  allBlog: tableData,
                                  allCatagori: blogCata,
                                }}
                                class="learn-more"
                              >
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
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                  class="overlay-box"
                                >
                                  <span class="icon fa fa-link"></span>
                                </Link>
                              </figure>
                              <div class="text">
                                <Link
                                  to={`/blog-details/${item.slug}`}
                                  state={{
                                    allBlog: tableData,
                                    allCatagori: blogCata,
                                  }}
                                >
                                  {item.title}
                                </Link>
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

            <BlogSidBar tableData={tableData} blogCata={blogCata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
