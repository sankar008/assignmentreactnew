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
      <section className="page_howit_work how_work_mobile banner-section-three">
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

      <section class="benefit-section how_its_works pt-5" id="how">
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
                  <div
                    class="col-xs-12 col-lg-3 col-sm-6 col-md-6 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                    data-aos="fade-zoom-in"
                    data-aos-group="features"
                    data-line-height="25.2px"
                  >
                    <div class="listar-feature-item listar-feature-has-link">
                      <a href="#"></a>

                      <div class="listar-feature-item-inner">
                        <div class="listar-feature-right-border"></div>

                        <div class="listar-feature-block-content-wrapper">
                          <div class="listar-feature-icon-wrapper">
                            <div class="listar-feature-icon-inner">
                              <div>
                                <img
                                  alt="Businesses"
                                  class="listar-image-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/9051/9051831.png"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="listar-feature-content-wrapper">
                            <div class="listar-feature-item-title listar-feature-counter-added">
                              <span>
                                <span>01</span>
                                Sign up
                              </span>
                            </div>

                            <div class="listar-feature-item-excerpt">
                              Start publish listings to show everyone the
                              details and goodies of your establishment.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                  </div>

                  <div
                    class="col-xs-12 col-lg-3 col-sm-6 col-md-6 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                    data-aos="fade-zoom-in"
                    data-aos-group="features"
                    data-line-height="25.2px"
                  >
                    <div class="listar-feature-item listar-feature-has-link">
                      <a href="#"></a>

                      <div class="listar-feature-item-inner">
                        <div class="listar-feature-right-border"></div>

                        <div class="listar-feature-block-content-wrapper">
                          <div class="listar-feature-icon-wrapper">
                            <div class="listar-feature-icon-inner">
                              <div>
                                <img
                                  alt="Customers"
                                  class="listar-image-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/3414/3414151.png"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="listar-feature-content-wrapper">
                            <div class="listar-feature-item-title listar-feature-counter-added">
                              <span>
                                <span>02</span>
                                Place your order
                              </span>
                            </div>

                            <div class="listar-feature-item-excerpt">
                              Easily find interesting places by local experts,
                              save time by checking listing features.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                  </div>

                  <div
                    class="col-xs-12 col-lg-3 col-sm-6 col-md-6 margin_auto_600 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                    data-aos="fade-zoom-in"
                    data-aos-group="features"
                    data-line-height="25.2px"
                  >
                    <div class="listar-feature-item listar-feature-has-link">
                      <a href="#"></a>

                      <div class="listar-feature-item-inner">
                        <div class="listar-feature-right-border"></div>

                        <div class="listar-feature-block-content-wrapper">
                          <div class="listar-feature-icon-wrapper">
                            <div class="listar-feature-icon-inner">
                              <div>
                                <img
                                  alt="Feedback"
                                  class="listar-image-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/3412/3412953.png"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="listar-feature-content-wrapper">
                            <div class="listar-feature-item-title listar-feature-counter-added">
                              <span>
                                <span>03</span>
                                Payment{" "}
                              </span>
                            </div>

                            <div class="listar-feature-item-excerpt">
                              Visitors discuss listings to share experiences, so
                              businesses get reputation consolidated.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                  </div>

                  <div
                    class="col-xs-12 col-lg-3 col-sm-6 col-md-6 margin_auto_600 listar-feature-item-wrapper listar-feature-with-image listar-height-changed matops_50px"
                    data-aos="fade-zoom-in"
                    data-aos-group="features"
                    data-line-height="25.2px"
                  >
                    <div class="listar-feature-item listar-feature-has-link">
                      <a href="#"></a>

                      <div class="listar-feature-item-inner">
                        <div class="listar-feature-right-border"></div>

                        <div class="listar-feature-block-content-wrapper">
                          <div class="listar-feature-icon-wrapper">
                            <div class="listar-feature-icon-inner">
                              <div>
                                <img
                                  alt="Feedback"
                                  class="listar-image-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/3412/3412953.png"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="listar-feature-content-wrapper">
                            <div class="listar-feature-item-title listar-feature-counter-added">
                              <span>
                                <span>04</span>
                                Get Solution{" "}
                              </span>
                            </div>

                            <div class="listar-feature-item-excerpt">
                              Visitors discuss listings to share experiences, so
                              businesses get reputation consolidated.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
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
