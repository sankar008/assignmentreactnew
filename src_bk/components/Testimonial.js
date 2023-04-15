import React from "react";
import Carousal from "./Carousal";

const Testimonial = () => {
  return (
    <>
      <section class="testimonial-section" id="review">
        <div
          class="circle-one paroller"
          data-paroller-factor="-0.20"
          data-paroller-factor-lg="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        ></div>
        <div
          class="circle-two paroller"
          data-paroller-factor="0.20"
          data-paroller-factor-lg="-0.20"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        ></div>
        <div
          class="pattern-layer-two"
          style={{ backgroundImage: `url(images/background/pattern-10.png)` }}
        ></div>
        <div class="auto-container">
          <div class="inner-container">
            <div
              class="pattern-layer"
              style={{
                backgroundImage: `url(images/background/pattern-9.png)`,
              }}
            ></div>

            <div class="sec-title centered">
              <div class="title">Testimonial</div>
              <h2>Words From Customers</h2>
              <div class="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure
                dolor in reprehenderit in
              </div>
            </div>
            <Carousal />
            <div class="row clearfix mt-3">
              <div class="col-md-12 text-center">
                <div class="btn-box">
                  <a class="theme-btn btn-style-two" href="#">
                    <span class="txt">All Review</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Testimonial;
