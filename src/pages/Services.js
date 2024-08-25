import React, { useState } from "react";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../components/Banner";
import OrderFrom from "../components/OrderFrom";
import Services from "../pages/Services";
import * as API from "../api/index";
import { IMG } from "../api/constant";
import { Link } from "react-router-dom";
import OrderaType from "../components/OrderaType";
const ServicesS = () => {
  const [tableData, setTableData] = useState([]);
  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.allServices();
      console.log("response", response);
      setTableData(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getdetailsData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="innerBanner banner-section-three"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/digital-technology-with-hexagonal-shapes_1017-29805.jpg?w=826&t=st=1678016637~exp=1678017237~hmac=03017c9c178ed90758336f1409a5f89831497da47f35310c04b90af62f2ce3ac)`,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <h1>
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
              <div className="stu_review mar_top">
                <div className="leftSide_rivew">
                  <div className="Left_icon">
                    <img src="images/education/woman.png"></img>
                    <div>
                      <h4>Trustpilot </h4>
                      <span>Reviews</span>
                    </div>
                  </div>
                  <div className="Right_text">
                    <span>4.5</span>
                  </div>
                </div>

                <div className="leftSide_rivew">
                  <div className="Left_icon">
                    <img src="images/education/man.png"></img>
                    <div>
                      <h4>EduReviewer </h4>
                      <span>Education made simple</span>
                    </div>
                  </div>
                  <div className="Right_text">
                    <span>4.2</span>
                  </div>
                </div>
              </div>
              <div className="stu_review mar_top mb_30px">
                <div className="leftSide_rivew">
                  <div className="Left_icon">
                    <img src="images/education/man.png"></img>
                    <div>
                      <h4>App </h4>
                      <span>Reviews</span>
                    </div>
                  </div>
                  <div className="Right_text">
                    <span>4.3</span>
                  </div>
                </div>

                <div className="leftSide_rivew">
                  <div className="Left_icon">
                    <img src="images/education/woman.png"></img>
                    <div>
                      <h4>Students </h4>
                      <span>Reviews</span>
                    </div>
                  </div>
                  <div className="Right_text">
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <OrderaType />
            </div>
          </div>
        </div>
      </div>
      <section class="courses-section">
        <div
          class="pattern-layer"
          style={{ backgroundImage: `url(images/background/pattern-2.png)` }}
        ></div>
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
        <div class="auto-container">
          <div class="sec-title centered">
            <h2>
              You can learn anything, Explore <br /> featured courses
            </h2>
            <div class="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure
              dolor in reprehenderit in
            </div>
          </div>
          <div class="row clearfix">
            {tableData.map((item, index) => (
              <div class="course-block col-lg-4 col-md-6 col-sm-6">
                <div
                  class="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div class="image">
                    <Link to={`/services-details/${item.slug}`}>
                      <img src={IMG + item.image} alt="" />
                    </Link>
                  </div>
                  <div class="lower-content px-0">
                    <h4>
                      <Link to={`/services-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <div class="uni-namdde">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesS;
