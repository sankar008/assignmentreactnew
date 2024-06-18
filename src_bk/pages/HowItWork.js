import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";

const HowItWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="page_howit_work how_work_mobile banner-section-three how_work_mobile_banner ">
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

      <section class="benefit-section how_its_works_sectiob pt-5" id="how">
        <div class="background-layer-one"></div>
        <div class="background-layer-two"></div>
        <div class="auto-container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div class="sec-title mb-3">
                <div class="title">How it works</div>
                <h2>
                  Complete Homework <br /> Help in 4 Steps
                </h2>
              </div>
              <div class="lower-text mt-0">
                <p>
                  Lebari is built for people like you. With useful features,
                  your dream and idea can <br /> become a reality. Lebari helps
                  you to achieve big things!
                </p>
              </div>
            </div>
            <div class="pset">
              <div class="container">
                <div class="row listar-feature-items">
                  <div className="col-lg-9">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="work_define">
                          <div class="icon_center">
                            <div class="top_icon">
                              <img src="images/copy-writing.png" alt="" />
                            </div>
                          </div>
                          <div class="work_content">
                            <h3>Sign Up</h3>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Praesentium, et similique harum
                              pariatur, assumenda ratione voluptates nam quos id
                              earum quasi ab asperiores eos facere saepe optio
                              perferendis? Fugit, itaque!
                            </p>
                          </div>
                          <div class="button_signup">
                            <a href="#">
                              <button class="arrow_btn">
                                <img src="images/right-arrow.png" alt="" />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="work_define">
                          <div class="icon_center">
                            <div class="top_icon">
                              <img src="images/copy-writing.png" alt="" />
                            </div>
                          </div>
                          <div class="work_content">
                            <h3>Sign Up</h3>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Praesentium, et similique harum
                              pariatur, assumenda ratione voluptates nam quos id
                              earum quasi ab asperiores eos facere saepe optio
                              perferendis? Fugit, itaque!
                            </p>
                          </div>
                          <div class="button_signup">
                            <a href="#">
                              <button class="arrow_btn">
                                <img src="images/right-arrow.png" alt="" />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="work_define">
                          <div class="icon_center">
                            <div class="top_icon">
                              <img src="images/copy-writing.png" alt="" />
                            </div>
                          </div>
                          <div class="work_content">
                            <h3>Sign Up</h3>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Praesentium, et similique harum
                              pariatur, assumenda ratione voluptates nam quos id
                              earum quasi ab asperiores eos facere saepe optio
                              perferendis? Fugit, itaque!
                            </p>
                          </div>
                          <div class="button_signup">
                            <a href="#">
                              <button class="arrow_btn">
                                <img src="images/right-arrow.png" alt="" />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="work_define">
                          <div class="icon_center">
                            <div class="top_icon">
                              <img src="images/copy-writing.png" alt="" />
                            </div>
                          </div>
                          <div class="work_content">
                            <h3>Sign Up</h3>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Praesentium, et similique harum
                              pariatur, assumenda ratione voluptates nam quos id
                              earum quasi ab asperiores eos facere saepe optio
                              perferendis? Fugit, itaque!
                            </p>
                          </div>
                          <div class="button_signup">
                            <a href="#">
                              <button class="arrow_btn">
                                <img src="images/right-arrow.png" alt="" />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div class="this_heding">
                      <h4>Our Work Update </h4>
                    </div>
                    <div class="news_dtls">
                      <div class="new_nws_img">
                        <img src="images/news.png" />
                      </div>
                      <div class="news_text">
                        <div class="news_hed">
                          <a href="#">Chemestry</a>
                        </div>
                        <a href="#">
                          There May Be No Consoles In The Future Ea Exec Says
                        </a>
                        <p>26-03-2023</p>
                      </div>
                    </div>
                    <div class="news_dtls">
                      <div class="new_nws_img">
                        <img src="images/news.png" />
                      </div>
                      <div class="news_text">
                        <div class="news_hed">
                          <a href="#">Phisic </a>
                        </div>
                        <a href="#">
                          There May Be No Consoles In The Future Ea Exec Says
                        </a>
                        <p>26-03-2023</p>
                      </div>
                    </div>
                    <div class="news_dtls">
                      <div class="new_nws_img">
                        <img src="images/news.png" />
                      </div>
                      <div class="news_text">
                        <div class="news_hed">
                          <a href="#">English </a>
                        </div>
                        <a href="#">
                          There May Be No Consoles In The Future Ea Exec Says
                        </a>
                        <p>26-03-2023</p>
                      </div>
                    </div>
                    <div class="news_dtls">
                      <div class="new_nws_img">
                        <img src="images/news.png" />
                      </div>
                      <div class="news_text">
                        <div class="news_hed">
                          <a href="#">Math</a>
                        </div>
                        <a href="#">
                          There May Be No Consoles In The Future Ea Exec Says
                        </a>
                        <p>26-03-2023</p>
                      </div>
                    </div>

                    <div class="this_heding mt-5">
                      <h4>Order Tutorial </h4>

                      <Link to="/order">
                        <button class="order_btns">Order Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row clearfix d-none">
            <div class="images-column col-lg-7 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="pattern-layer"></div>
                <div class="pattern-layer-two"></div>
                <div class="color-layer d-none"></div>
                <div class="image">
                  <img
                    src="https://img.freepik.com/premium-vector/online-meeting-business-concept-flat-vector-illustration-banner-landing-page_128772-891.jpg"
                    alt=""
                  />
                </div>
                {/* <div class="image-two">
                  <img src="images/resource/benefit-3.jpg" alt="" />
                </div>
                <div class="image-three">
                  <img src="images/resource/benefit-2.jpg" alt="" />
                </div> */}
              </div>
            </div>

            <div class="content-column col-lg-5 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="sec-title">
                  <div class="title">How it works</div>
                  <h2>Complete Homework Help in 4 Steps</h2>
                </div>
                <ul class="list-style-one">
                  <li>
                    <span class="icon flaticon-double-check"></span>
                    <strong>Sign up</strong>Vendors, suppliers and companies
                    with online access to your technology can be your weakest
                    link
                  </li>
                  <li>
                    <span class="icon flaticon-double-check"></span>
                    <strong>Place your order </strong>Vendors, suppliers and
                    companies with online access to your technology can be your
                    weakest link
                  </li>
                  <li>
                    <span class="icon flaticon-double-check"></span>
                    <strong>Make Payment </strong>Vendors, suppliers and
                    companies with online access to your technology can be your
                    weakest link
                  </li>
                  <li>
                    <span class="icon flaticon-double-check"></span>
                    <strong>Get Solution </strong>Vendors, suppliers and
                    companies with online access to your technology can be your
                    weakest link
                  </li>
                </ul>
                <div class="btn-box">
                  <a href="about.html" class="theme-btn btn-style-two">
                    <span class="txt">Join For free</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
