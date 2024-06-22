import React from "react";

const Instructor = () => {
  return (
    <>
      <section class="instructor-section">
        <div class="background-layer"></div>
        <div class="background-layer-one"></div>
        <div class="background-layer-two"></div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="blocks-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="row clearfix">
                  <div class="service-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="inner-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div class="border-layer"></div>
                      <div class="icon-box">
                        <div class="icon flaticon-verify"></div>
                      </div>
                      <h4>
                        <a href="course-detail.html">Trusted content</a>
                      </h4>
                      <div class="text">
                        Online learning is as easy and natural as chatting with
                        a group of friends.
                      </div>
                    </div>
                  </div>

                  <div class="service-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="inner-box wow fadeInLeft"
                      data-wow-delay="150ms"
                      data-wow-duration="1500ms"
                    >
                      <div class="border-layer"></div>
                      <div class="icon-box">
                        <div class="icon flaticon-heart-box"></div>
                      </div>
                      <h4>
                        <a href="course-detail.html">Flexible courses</a>
                      </h4>
                      <div class="text">
                        We provide online learning solutions for secondary
                        education, from structured content to courses fully
                        taught{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="instructor-column col-lg-4 col-md-12 col-sm-12">
              <div
                class="inner-column wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <h4>Become an instructor</h4>
                <p>
                  Top instructors from around the world teach millions of
                  students Duis aute irure dolor in reprehenderit in{" "}
                </p>
                <p>
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non
                </p>
                <a class="click-here" href="membership.html">
                  Click here for apply
                </a>
                <div class="image titlt" data-tilt data-tilt-max="4">
                  <img src="images/resource/instructor.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
