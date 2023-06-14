import React from "react";
import { useState } from "react";
import * as API from "../api/index";
const EditProfile = ({ formData, setFormData }) => {
  const handaler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const updateProfile = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        name: formData.name,
        emailId: formData.emailId,
        id: localStorage.getItem("_userId"),
      };
      console.log("reqObj", reqObj);
      const response = await API.user_profile_update(reqObj, header);
      console.log("response", response);
    } catch (error) {}
  };

  return (
    <>
      <div class="inner-column">
        <div class="circle-layer"></div>

        <div class="contact-form">
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handaler}
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              name="emailId"
              readOnly
              placeholder="Email"
              value={formData.emailId}
              onChange={handaler}
            />
          </div>

          {/* <div class="form-group">
              <input type="text" name="phone" placeholder="Phone" required="" />
            </div>

            <div class="form-group">
              <textarea
                class=""
                name="message"
                placeholder="Comment"
              ></textarea>
            </div> */}

          <div class="form-group">
            <button
              onClick={updateProfile}
              class="theme-btn btn-style-five"
              type="submit"
              name="submit-form"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
