import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="page_faq banner-section-three">
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
      <section class="main_concepts bg_faq">
        <div class="auto-container">
          <div class="row">
            <div class="col-md-9">
              <div class="faq_body mar_btms">
                <div class="inner-column">
                  <div class="sec-title">
                    <div class="title">Our Status valu</div>
                    <h2>
                      Differentiate your classroom <br /> What makes us special?
                    </h2>
                  </div>

                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-side ektra_bgshadow col-lg-3 col-md-3 col-sm-12 ">
              <aside class="sidebar sticky-top">
                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div class="widget-content">
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-5.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="#" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="#">Is Baking a Good career? 15 Reasons </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
