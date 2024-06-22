import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";
import OwlCarousel from "react-owl-carousel";
import * as API from "../Admin/Api/index";
import { IMG } from "../api/constant";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
const BlogDetails = () => {
  const [tableData, setTableData] = useState([]);
  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_blog(header);
      console.log("response", response);
      setTableData(response.data.data);
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
    </>
  );
};

export default BlogDetails;
