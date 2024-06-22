import React from "react";

const Counter = () => {
  return (
    <div>
      <section class="goal-section pb-0">
        <div class="pattern-layer-four"></div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="images-column col-lg-6 col-md-12 col-sm-12">
              <div class="color-layer"></div>
              <div class="inner-column">
                <div
                  class="pattern-layer"
                  style={{
                    backgroundImage: `url(images/background/pattern-4.png)`,
                  }}
                ></div>
                <div
                  class="pattern-layer-two"
                  style={{
                    backgroundImage: `url(images/background/pattern-17.png)`,
                  }}
                ></div>
                <div class="image">
                  <img
                    src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=2000"
                    alt=""
                  />
                </div>
                {/* <div class="image-two">
                  <img src="images/resource/goal-2.jpg" alt="" />
                </div> */}
              </div>
            </div>

            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div
                  class="pattern-layer-three"
                  style={{
                    backgroundImage: `url(images/background/pattern-13.png)`,
                  }}
                ></div>
                <div class="sec-title">
                  <div class="title">Achieve Goals</div>
                  <h2>Start To Success</h2>
                  <div class="text">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur Duis aute irure
                    dolor in
                  </div>
                </div>

                <div class="fact-counter">
                  <div class="row clearfix">
                    <div class="column counter-column col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="count-outer count-box">
                            <span
                              class="count-text"
                              data-speed="3000"
                              data-stop="36"
                            >
                              36
                            </span>
                            +
                          </div>
                          <h4 class="counter-title">Over 35 Free Courses</h4>
                        </div>
                      </div>
                    </div>
                    <div class="column counter-column col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="count-outer count-box alternate">
                            <span
                              class="count-text"
                              data-speed="5000"
                              data-stop="34"
                            >
                              34
                            </span>
                          </div>
                          <h4 class="counter-title">
                            Member State Associations
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div class="column counter-column col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="count-outer count-box">
                            <span
                              class="count-text"
                              data-speed="2000"
                              data-stop="15"
                            >
                              15
                            </span>
                            k
                          </div>
                          <h4 class="counter-title">
                            Over 19,000 High Schools
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div class="column counter-column col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="count-outer count-box">
                            <span
                              class="count-text"
                              data-speed="3500"
                              data-stop="20"
                            >
                              20
                            </span>
                            m
                          </div>
                          <h4 class="counter-title">
                            Over 11 million Students
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
