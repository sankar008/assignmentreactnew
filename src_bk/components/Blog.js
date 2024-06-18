import React from "react";

const Blog = () => {
  return (
    <>
      <section class="news-section">
        <div
          class="pattern-layer"
          style={{ backgroundImage: `url(images/background/pattern-11.png)` }}
        ></div>
        <div class="auto-container">
          <div class="sec-title centered">
            <div class="title">Our Blogs</div>
            <h2>Latest articles & news</h2>
            <div class="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure
              dolor in reprehenderit in
            </div>
          </div>
          <div class="inner-container">
            <div
              class="icon-layer-one"
              style={{ backgroundImage: `url(images/icons/icon-1.png)` }}
            ></div>
            <div
              class="icon-layer-two"
              style={{ backgroundImage: `url(images/icons/icon-2.png)` }}
            ></div>
            <div
              class="icon-layer-three"
              style={{ backgroundImage: `url(images/icons/icon-2.png)` }}
            ></div>
            <div class="row clearfix">
              <div class="news-block col-lg-4 col-md-4 col-sm-12">
                <div
                  class="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div class="image">
                    <a href="#">
                      <img src="images/resource/news-1.jpg" alt="" />
                    </a>
                  </div>
                  <div class="lower-content">
                    <div class="border-layer"></div>
                    <ul class="post-info">
                      <li>Technology</li>
                      <li>Updated Sep 26, 2020</li>
                    </ul>
                    <h4>
                      <a href="#">
                        All The Security & Privacy <br /> Updates From Amazon’s
                      </a>
                    </h4>
                    <a href="#" class="more">
                      More <span class="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="news-block col-lg-4 col-md-4 col-sm-12">
                <div
                  class="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div class="image">
                    <a href="#">
                      <img src="images/resource/news-2.jpg" alt="" />
                    </a>
                  </div>
                  <div class="lower-content">
                    <div class="border-layer"></div>
                    <ul class="post-info">
                      <li>Education</li>
                      <li>Updated Sep 26, 2020</li>
                    </ul>
                    <h4>
                      <a href="#">
                        All The Security & Privacy Updates From Amazon’s
                      </a>
                    </h4>
                    <a href="#" class="more">
                      More <span class="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="news-block col-lg-4 col-md-4 col-sm-12">
                <div
                  class="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div class="image">
                    <a href="#">
                      <img src="images/resource/news-2.jpg" alt="" />
                    </a>
                  </div>
                  <div class="lower-content">
                    <div class="border-layer"></div>
                    <ul class="post-info">
                      <li>Education</li>
                      <li>Updated Sep 26, 2020</li>
                    </ul>
                    <h4>
                      <a href="#">
                        All The Security & Privacy Updates From Amazon’s
                      </a>
                    </h4>
                    <a href="#" class="more">
                      More <span class="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
