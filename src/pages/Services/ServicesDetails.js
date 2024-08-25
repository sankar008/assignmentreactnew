import { Accordion } from "react-bootstrap-accordion";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import * as FAPI from "../../api/index";
import { Link } from "react-router-dom";
const ServicesDetails = () => {
  const loaction = useLocation();

  const param = useParams();

  const [blogCata, setBlogCata] = useState([]);

  const [blogData, setBlogData] = useState([]);
  console.log("blogData", blogData);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await FAPI.services_details(param.slug);
      console.log("response", response);

      setBlogData(response.data.data);
      const cataresponse = await FAPI.allServicesCata();
      console.log("cataresponse", cataresponse);

      setBlogCata(cataresponse.data.data);
    } catch (error) {}
  };

  console.log("blogData", blogData);

  useEffect(() => {
    getdetailsData();
    window.scrollTo(0, 0);
  }, []);
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
          <div class="content-box">
            <h2>{blogData.title}</h2>
            <ul class="course-info">
              {/* <li>
                <span class="icon fa fa-clock-o"></span>Last Update : November
                23, 2020
              </li> */}
            </ul>
            {/* <div class="development">{blogData.category.name}</div> */}
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
                  <div
                    dangerouslySetInnerHTML={{ __html: blogData.description }}
                  />
                </p>
                <div class="learn-box d-none">
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
                <h5 className="d-none">Requirements</h5>
                <ul class="learn-list-two d-none">
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
                {blogCata.map((item, index) => (
                  <Accordion
                    title={
                      item.name +
                      `  -----------------------  (${item.serviceCount})`
                    }
                  >
                    <ul class="level-list">
                      <li>Sub Catagori</li>
                      <li>Sub Catagori</li>
                      <li>Sub Catagori</li>
                      <li>Sub Catagori</li>
                    </ul>
                  </Accordion>
                ))}

                <div class="btns-box">
                  <Link to="/" class="theme-btn enrol-btn">
                    Enrol Now
                  </Link>
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
