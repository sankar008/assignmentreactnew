import { Accordion } from "react-bootstrap-accordion";
import React from "react";

const ServicesDetails = () => {
  return (
    <>
      <section class="cource-detail-banner-section">
        <div
          class="pattern-layer-one"
          //style="background-image: url(images/icons/icon-5.png)"
        ></div>
        <div
          class="pattern-layer-two"
          // style="background-image: url(images/icons/icon-6.png)"
        ></div>
        <div
          class="pattern-layer-three"
          //style="background-image: url(images/icons/icon-4.png)"
        ></div>
        <div
          class="pattern-layer-four"
          //style="background-image: url(images/icons/icon-8.png)"
        ></div>
        <div class="auto-container">
          <ul class="page-breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Courses Single</li>
          </ul>
          <div class="content-box">
            <div class="title">5 day left at this price!</div>
            <h2>
              The Complete JavaScript Course 2020 <br /> From Zero to Expert!
            </h2>
            <ul class="course-info">
              <li>
                <span class="icon fa fa-clock-o"></span>Last Update : November
                23, 2020
              </li>
            </ul>
            <div class="development">Development courses</div>
            <div class="rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <strong>4.9</strong>
              <i>(70 Review)</i>
            </div>
          </div>
        </div>
      </section>
      <section class="course-detail-section">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <h5>Courses Description</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum
                </p>
                <div class="learn-box">
                  <h5>What you'll learn</h5>
                  <ul class="learn-list">
                    <li>
                      JavaScript fundamentals: variables, if/else, operators,
                      boolean logic, functions, arrays, objects, loops, strings,
                      etc.
                    </li>
                    <li>
                      Become job-ready by understanding how JavaScript really
                      works behind the scenes
                    </li>
                    <li>
                      Modern ES6+ from the beginning: arrow functions,
                      destructuring, spread operator, optional chaining
                      (ES2020), etc.
                    </li>
                    <li>
                      Modern tools for 2020 and beyond: NPM, Parcel, Babel and
                      ES6 modules
                    </li>
                    <li>
                      Modern ES6+ from the beginning: arrow functions,
                      destructuring, spread operator, optional chaining
                      (ES2020), etc.
                    </li>
                    <li>
                      Modern ES6+ from the beginning: arrow functions,
                      destructuring, spread operator, optional chaining
                      (ES2020), etc.
                    </li>
                  </ul>
                </div>
                <h5>Requirements</h5>
                <ul class="learn-list-two">
                  <li>
                    Sed consequat justo non mauris pretium at tempor justo
                    sodales. Quisque tincidunt laoreet malesuada Cum sociis
                    natoque penatibus et magnis{" "}
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </li>
                  <li>
                    JavaScript fundamentals: variables, if/else, operators,
                    boolean logic, functions, arrays, objects, loops, strings,
                    etc.
                  </li>
                </ul>
              </div>
            </div>

            <div class="info-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="price">
                  $9.99 <i>$129.99</i> <span>92% of</span>
                </div>
                <h5>All Categories</h5>
                <Accordion title="Catagori No. 01">
                  <ul class="level-list">
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                  </ul>
                </Accordion>
                <Accordion title="Catagori No. 01">
                  <ul class="level-list">
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                  </ul>
                </Accordion>
                <Accordion title="Catagori No. 01">
                  <ul class="level-list">
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                  </ul>
                </Accordion>
                <Accordion title="Catagori No. 01">
                  <ul class="level-list">
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                    <li>Sub Catagori</li>
                  </ul>
                </Accordion>

                <div class="btns-box">
                  <a href="#" class="theme-btn enrol-btn">
                    Enrol Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
