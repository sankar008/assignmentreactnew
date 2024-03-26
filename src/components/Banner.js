import React from "react";
import Marquee from "react-marquee-master";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "./OrderFrom";
const Banner = () => {
  return (
    <div>
      <section class="banner-section">
        <div class="auto-container">
          <div class="pattern-layer-six"></div>
          <div class="pattern-layer-seven"></div>
          <div class="pattern-layer-eight"></div>
          <div class="row clearfix">
            <div class="image-column col-lg-7 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="pattern-layer-one d-none"></div>
                <div class="pattern-layer-two"></div>
                <div class="pattern-layer-three d-none"></div>
                <div class="pattern-layer-four"></div>
                <div class="pattern-layer-five"></div>
                <h1 class="font_smll">
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

                <div class="image image_widths">
                  <img src="images/main-slider/woma.png" alt="" />
                </div>
                {/* <div class="image-two">
                  <img src="images/main-slider/image-4.png" alt="" />
                </div> */}
                <div class="image-content d-none">
                  <p>
                    87% of people <br /> learning
                  </p>
                </div>
              </div>
            </div>
            <div class="content-column col-lg-5 col-md-12 col-sm-12">
              <div className="Order_section">
                <div className="row justify-content-center mb-5">
                  <div className="col-lg-12 col-md-12">
                    <Link to="/orders" state={{ data: 1 }}>
                      <div className="order__firststp">
                        <img src="./images/homework.png"></img>
                        <div className="content">
                          <h5>Homework / Assignment</h5>
                          <p>(Post Question, Lab Work, Project)</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <Link to="/orders" state={{ data: 2 }}>
                      <div className="order__firststp">
                        <img src="./images/deadline.png"></img>
                        <div className="content">
                          <h5>Schedule 1 to 1 Session</h5>
                          <p>(Get Instant Solution)</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <Link to="/orders" state={{ data: 3 }}>
                      <div className="order__firststp">
                        <div className="inco_effct">
                          <img src="./images/writing.png"></img>
                        </div>

                        <div className="content">
                          {" "}
                          <h5>Essay Writing</h5>
                          <p>(Customised Essay Help)</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <OrderFrom /> */}
            </div>
          </div>
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
    </div>
  );
};

export default Banner;
