import axios from "axios";
import * as c from "./constant";

// ? Student Registration:

export const user_registration = async (data) => {
  try {
    const url = c.STUDENT;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const user_otp_verifi = async (data) => {
  try {
    const url = c.STUDENT + "/opt/verification";
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const add_enquiry = async (data, header) => {
  try {
    const url = c.ENQIRY;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const get_order_byId = async (data, header) => {
  try {
    const url = c.ENQIRY + "/" + data + "/student";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const get_userDetails = async (data, header) => {
  try {
    const url = c.STUDENT + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const user_profile_update = async (data, header) => {
  try {
    const url = c.STUDENT;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    console.log("res", res);
    return res;
  } catch (e) {
    return e.response;
  }
};
