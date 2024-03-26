import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="main-footer">
        <div class="circle-layer"></div>
        <div
          class="pattern-layer-one"
          style={{ backgroundImage: `url(images/background/pattern-12.png)` }}
        ></div>
        <div
          class="pattern-layer-two"
          style={{ backgroundImage: `url(images/background/pattern-13.png)` }}
        ></div>
        <div
          class="pattern-layer-three"
          style={{ backgroundImage: `url(images/background/pattern-14.png)` }}
        ></div>
        <div
          class="pattern-layer-four"
          style={{ backgroundImage: `url(images/background/pattern-13.png)` }}
        ></div>
        <div class="auto-container">
          <div class="widgets-section">
            <div class="row clearfix">
              <div class="footer-column col-lg-5 col-md-12 col-sm-12">
                <div class="footer-widget logo-widget">
                  <div class="logo">
                    <a href="index.html">
                      <img src="images/logos.png" alt="" />
                    </a>
                  </div>
                  {/* <ul class="info-list">
                    <li>
                      Tel:<a href="tel:+0845-371-02-02"> 0845 371 02 02</a>
                    </li>
                    <li>
                      Email:
                      <a href="mailto:info@yoursite.co.uk">
                        {" "}
                        info@yoursite.co.uk
                      </a>
                    </li>
                  </ul> */}
                  <ul class="social-box  hide">
                    <li class="twitter">
                      <a
                        target="_blank"
                        href="http://twitter.com/"
                        class="fa fa-twitter"
                      ></a>
                    </li>
                    <li class="pinterest">
                      <a
                        target="_blank"
                        href="http://pinterest.com/"
                        class="fa fa-pinterest-p"
                      ></a>
                    </li>
                    <li class="facebook">
                      <a
                        target="_blank"
                        href="http://facebook.com/"
                        class="fa fa-facebook-f"
                      ></a>
                    </li>
                    <li class="dribbble">
                      <a
                        target="_blank"
                        href="http://dribbble.com/"
                        class="fa fa-dribbble"
                      ></a>
                    </li>
                  </ul>
                  <div class="text">
                    Get started now and take advantage of <br /> our 30 day free
                    trial today.
                  </div>
                </div>
              </div>

              <div class="footer-column col-lg-7 col-md-12 col-sm-12">
                <div class="row clearfix">
                  <div class="column col-lg-4 col-md-4 col-sm-4 col-6">
                    <h5>About</h5>
                    <ul class="list">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Impact</a>
                      </li>
                      <li>
                        <a href="#">Our team</a>
                      </li>
                      <li>
                        <a href="#">Our interns</a>
                      </li>
                    </ul>
                  </div>
                  <div class="column col-lg-4 col-md-4 col-sm-4 col-6">
                    <h5>Need some help?</h5>
                    <ul class="list">
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Child safety</a>
                      </li>
                      <li>
                        <a href="#">Help Centre</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Academy</a>
                      </li>
                    </ul>
                  </div>
                  <div class="column col-lg-4 col-md-4 col-sm-4">
                    <h5>Courses</h5>
                    <ul class="list">
                      <li>
                        <a href="#">Khan Kids app</a>
                      </li>
                      <li>
                        <a href="#">Science & engineering</a>
                      </li>
                      <li>
                        <a href="#">Computing</a>
                      </li>
                      <li>
                        <a href="#">Arts & humanities</a>
                      </li>
                      <li>
                        <a href="#">Economics & finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lower-box">
            <div class="row clearfix">
              <div class="col-lg-6 col-lg-6 col-sm-12">
                <div class="subscribe-form">
                  <h6>Newsletter</h6>
                  <form method="post" action="">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Your email"
                        required
                      />
                      <button type="submit" class="submit-btn">
                        <span class="icon flaticon-right-arrow-2"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-lg-6 col-sm-12">
                <div class="text">
                  Need to train your team? We offer flexible, cost-effective{" "}
                  <br /> group memberships for your business, school,
                </div>
                <a href="#" class="singup">
                  Free Singup
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="row clearfix">
              <div class="copyright-column col-lg-6 col-md-12 col-sm-12">
                <div class="copyright">Copyright 2023, All Right Reserved</div>
              </div>

              <div class="nav-column col-lg-6 col-md-12 col-sm-12">
                <ul>
                  <li>
                    <a href="#">SiteMap</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
