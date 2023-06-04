import React from "react";
import { Link } from "react-router-dom";
import { User, Key, Bookmark } from "react-feather";
const UserDashboard = () => {
  return (
    <>
      <section class="user-profile-section">
        <div
          class="pattern-layer-one"
          style={{ backgroundImage: `url(images/icons/icon-5.png)` }}
        ></div>
        <div
          class="pattern-layer-two"
          style={{ backgroundImage: `url(images/icons/icon-6.png)` }}
        ></div>
        <div
          class="pattern-layer-three"
          style={{ backgroundImage: `url(images/icons/icon-4.png)` }}
        ></div>
        <div
          class="pattern-layer-four"
          style={{ backgroundImage: `url(images/icons/icon-8.png)` }}
        ></div>
        <div class="auto-container">
          <ul class="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>User Profile</li>
          </ul>
          <div class="profile-box">
            <div class="box-inner">
              <div class="image">
                <img src="images/resource/user.jpg" alt="" />
              </div>
              <h4>Siropa Tamim</h4>
              <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore
              </div>
              <div class="rating">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star-o"></span>
                <strong>4.9</strong>
                <i>(70 Review)</i>
              </div>
              <ul class="social-box">
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
            </div>
            <div className="userDashborad">
              <nav>
                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <User color="#fbb039" size={26} />
                    Edit Profile
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <Key color="#fbb039" size={26} />
                    Changes Password
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <Bookmark color="#fbb039" size={26} />
                    Transaction history
                  </button>
                </div>
              </nav>
              <div class="tab-content p-3 border bg-light" id="nav-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <p>
                    <strong>
                      1 This is some placeholder content the Home tab's
                      associated content.
                    </strong>
                    Clicking another tab will toggle the visibility of this one
                    for the next. The tab JavaScript swaps classes to control
                    the content visibility and styling. You can use it with
                    tabs, pills, and any other <code>.nav</code>-powered
                    navigation.
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <p>
                    <strong>
                      2 This is some placeholder content the Profile tab's
                      associated content.
                    </strong>
                    Clicking another tab will toggle the visibility of this one
                    for the next. The tab JavaScript swaps classes to control
                    the content visibility and styling. You can use it with
                    tabs, pills, and any other <code>.nav</code>-powered
                    navigation.
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <p>
                    <strong>
                      3 This is some placeholder content the Contact tab's
                      associated content.
                    </strong>
                    Clicking another tab will toggle the visibility of this one
                    for the next. The tab JavaScript swaps classes to control
                    the content visibility and styling. You can use it with
                    tabs, pills, and any other <code>.nav</code>-powered
                    navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
