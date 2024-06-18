import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";
import OwlCarousel from "react-owl-carousel";
import ProgressBar from "react-animated-progress-bar";
const Review = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="page_review banner-section-three">
        <div
          class="pattern-layer-two"
          style={{ backgroundImage: `url(images/background/pattern-21.png)` }}
        ></div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div
                  class="pattern-layer-one"
                  style={{
                    backgroundImage: `url(images/main-slider/pattern-1.png)`,
                  }}
                ></div>
                <div
                  class="icon-layer"
                  style={{ backgroundImage: `url(images/icons/icon-2.png)` }}
                ></div>
                <div
                  class="icon-layer-two"
                  style={{ backgroundImage: `url(images/icons/icon-5.png)` }}
                ></div>
                <h2>
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
                </h2>
                <img src="https://media.istockphoto.com/id/1349476600/vector/talk-conversation-concept.jpg?s=612x612&w=0&k=20&c=4pq7uNqStestoXXlVrYPJOdz0AT18gclj9JN7sPJEZ8=" />
              </div>
            </div>
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="about-us">
                <div
                  class="icon-layer-three"
                  style={{ backgroundImage: `url(images/icons/icon-3.png)` }}
                ></div>
                <div
                  class="icon-layer-four"
                  style={{ backgroundImage: `url(images/icons/icon-2.png)` }}
                ></div>
                <div
                  class="icon-layer-five"
                  style={{ backgroundImage: `url(images/icons/icon-4.png)` }}
                ></div>
                <OrderFrom />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-4">
        <div class="auto-container">
          <div className="btm_clumn row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-6 ">
              <div class="bath_box bath_box1">
                <div class="box_glsEfct">
                  <div className="bannrBox_icon">
                    <div>
                      <h4>98765+ </h4>
                      {
                        // <span>Reviews</span>
                      }
                    </div>
                    <img src="images/education/reading.png"></img>
                  </div>
                  <h5>Students Reating</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
              <div class="bath_box bath_box2">
                <div class="box_glsEfct">
                  <div className="bannrBox_icon">
                    <div>
                      <h4>98765+ </h4>
                    </div>
                    <img src="images/education/graduated.png"></img>
                  </div>
                  <h5>Delivered Orders</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
              <div class="bath_box bath_box3">
                <div class="box_glsEfct">
                  <div className="bannrBox_icon">
                    <div>
                      <h4>98765+ </h4>
                    </div>
                    <img src="images/education/collage.png"></img>
                  </div>
                  <h5>Subject Matter Experts</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
              <div class="bath_box bath_box4">
                <div class="box_glsEfct">
                  <div className="bannrBox_icon">
                    <div>
                      <h4>98765+ </h4>
                    </div>
                    <img src="images/education/education.png"></img>
                  </div>
                  <h5>Visitor Reating</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main_concepts review_bg">
        <div class="auto-container">
          <div class="row">
            <div class="col-md-7">
              <div class="sec-title centered">
                <h2>Words From Customers</h2>
                <div class="text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure
                  dolor in reprehenderit in
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="site_review">
                    <div class="top_review">
                      <div class="image_rviw_side">
                        <img src="images/profile.png"></img>
                      </div>
                      <div class="stu_riew">
                        <h5>Student</h5>
                        <div class="stuRate">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Duis aute
                      irure dolor in reprehenderit in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-side ektra_bgshadow col-lg-5 col-md-12 col-sm-12">
              <div className="row justify-content-center mb-5">
                <div className="col-md-2">
                  <h3>5 Star</h3>
                </div>
                <div className="col-md-10">
                  <ProgressBar
                    width="400px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage="95"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                  />
                </div>
                <div className="col-md-2">
                  <h3>4 Star</h3>
                </div>
                <div className="col-md-10">
                  <ProgressBar
                    width="400px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                  />
                </div>
                <div className="col-md-2">
                  <h3>3 Star</h3>
                </div>
                <div className="col-md-10">
                  <ProgressBar
                    width="400px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage="60"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                  />
                </div>
                <div className="col-md-2">
                  <h3>2 Star</h3>
                </div>
                <div className="col-md-10">
                  <ProgressBar
                    width="400px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage="40"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                  />
                </div>
                <div className="col-md-2">
                  <h3>1 Star</h3>
                </div>
                <div className="col-md-10">
                  <ProgressBar
                    width="400px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage="20"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                  />
                </div>
              </div>
              <aside class="sidebar sticky-top">
                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div class="widget-content">
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-5.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
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
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
