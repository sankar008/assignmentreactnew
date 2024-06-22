import React from "react";
import { Link } from "react-router-dom";
import { User, Key, Bookmark, Mail, BookOpen, Briefcase } from "react-feather";
import EditProfile from "./EditProfile";
import * as API from "../api/index";
import OrderList from "./OrderList";
import { useEffect } from "react";
import { useState } from "react";
const initialData = {
  name: "",
  emailId: "",
};
const UserDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(initialData);
  const user_details_by = async () => {
    const header = localStorage.getItem("_tokenCode");
    console.log("header", header);
    try {
      const response = await API.get_userDetails(
        localStorage.getItem("_userId")
      );
      console.log("response", response);
      setUserData(response.data.data);
      setFormData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    user_details_by();
  }, []);

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
              <h4>hghjgg</h4>
              <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore
              </div>
              <p>
                <Mail size="25" /> <strong>mbmbm</strong>
              </p>
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
                    id="nav-order-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-order"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <BookOpen color="#fbb039" size={26} />
                    Your Order
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
                    <Briefcase color="#fbb039" size={26} />
                    wallet ($ 100)
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
                </div>
              </nav>
              <div class="tab-content p-3 border" id="nav-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <EditProfile formData={formData} setFormData={setFormData} />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-order"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <OrderList />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="contact-form">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Old Password"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        name="emailId"
                        readOnly
                        placeholder="New Password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        name="emailId"
                        readOnly
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="form-group">
                      <button
                        class="theme-btn btn-style-five"
                        type="submit"
                        name="submit-form"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <h4>Coming soon</h4>
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
