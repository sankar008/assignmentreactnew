// import { Accordion } from "react-bootstrap-accordion";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import * as FAPI from "../../api/index";
import * as API from "../../api/index";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
const ServicesDetails = () => {
  const loaction = useLocation();

  const param = useParams();

  const [blogCata, setBlogCata] = useState([]);

  const [blogData, setBlogData] = useState([]);

  const [subcataData, setSubcataData] = useState([]);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await FAPI.services_details(param.slug);
      console.log("response", response);

      setBlogData(response.data.data);
      const cataresponse = await FAPI.allServicesCata();
      console.log("cataresponse", cataresponse);
      const subCatars = await API.catagoriBySubcatagori();

      console.log("subCatars", subCatars);

      setBlogCata(cataresponse.data.data);
    } catch (error) {}
  };

  const catagoriyWais = async (data) => {
    console.log("data", data);

    try {
      const response = await API.catagoriBySubcatagori(data);
      console.log("response", response);
      setSubcataData(response.data.data);
    } catch (error) {}
  };

  const handelarServicesData = async (data) => {
    try {
      const response = await API.services_cataWishData(data);
      console.log("responsesss", response);
    } catch (error) {}
  };

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
              <div class="inner-column mt-1">
                <div class="price">
                  $9.99 <i>$129.99</i> <span>92% of</span>
                </div>
                <h5>All Categories</h5>
                <Accordion.Root
                  className="AccordionRoot"
                  type="single"
                  defaultValue="item-1"
                  collapsible
                >
                  {blogCata.map((item, index) => (
                    <Accordion.Item
                      key={index}
                      onClick={() => catagoriyWais(item._id)}
                      className="AccordionItem"
                      value={item._id}
                    >
                      <Accordion.AccordionTrigger>
                        <span>{item.name} </span>{" "}
                        <span>({item.serviceCount})</span>
                      </Accordion.AccordionTrigger>
                      <Accordion.AccordionContent className="accBody">
                        <ul class="level-list">
                          {subcataData.map((item, index) => (
                            <li key={index}>
                              <Link
                                to="#"
                                onClick={() => handelarServicesData(item._id)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.AccordionContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>

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
