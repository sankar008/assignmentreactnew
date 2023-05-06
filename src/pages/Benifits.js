import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";

const Benifits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="page_Benifits banner-section-three">
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

      <section className="benifitBody">
        <div class="auto-container">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div class="section_header sec-title">
                <h2>
                  Multiple Benefits of <br></br> Homework Help
                </h2>
                <p class="text">
                  Our philosophy is learning through play as we offer a
                  stimulating environment for children.Our philosophy is
                  learning through play as we offer a stimulating environment
                  for children.Our philosophy is learning through play as we
                  offer a stimulating environment for children.
                </p>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-9">
              <div class="row mb-4">
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side mar_btms">
                    <img src="images/support.png" />
                    <h6>No Plagiarism</h6>
                    <p>Provides absolute comfort to users.</p>
                  </div>
                </div>
                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are ">
                    <h6>No Plagiarism</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>

                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are mar_btms">
                    <h6>24/7 support</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side">
                    <img src="images/support.png" />
                    <h6>24/7 support</h6>
                    <p>Get help and find answers</p>
                  </div>
                </div>
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side mar_btms">
                    <img src="images/support.png" />
                    <h6>On-time Submission</h6>
                    <p>Time of the submission, On-Point</p>
                  </div>
                </div>
                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are">
                    <h6>On-time Submission</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are mar_btms">
                    <h6>Rewrites that satisfy</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side">
                    <img src="images/support.png" />
                    <h6>Rewrites that satisfy</h6>
                    <p>Rewriting until you are satisfied</p>
                  </div>
                </div>
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side mar_btms">
                    <img src="images/support.png" />
                    <h6>Confidentiality</h6>
                    <p>Managing data confidentiality</p>
                  </div>
                </div>
                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are">
                    <h6>Confidentiality</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div class="col-md-7 mar_bottms_25pxls">
                  <div class="Text_are mar_btms">
                    <h6> Grade Boosting solutions</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div class="col-md-5 mar_bottms_25pxls">
                  <div class="icon_side">
                    <img src="images/support.png" />
                    <h6> Grade Boosting solutions</h6>
                    <p>Take your time during exams</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="belifit_right">
                <div class="recent_dtls">
                  <h4>Top Services</h4>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Assignment Help</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Essay Writing</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Live Session</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Lab Report</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Project Report Writing</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Assignment Help</h5>
                  </div>
                </div>
                <div class="blog_main">
                  <div class="blog_images">
                    <img src="images/assignment.png" />
                  </div>
                  <div class="blogs_txts">
                    <h5>Assignment Help</h5>
                  </div>
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
      </section>
    </div>
  );
};

export default Benifits;
