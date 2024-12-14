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

export const user_login = async (data) => {
  try {
    const url = c.STUDENT + "/login";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const forgotPassword = async (data) => {
  try {
    const url = c.STUDENT + "/forgotpassword/optsend";
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const newPassword = async (data) => {
  try {
    const url = c.STUDENT + "/opt/reset-password";
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
export const all_blog = async (header) => {
  try {
    const url = c.BLOG;
    const res = await axios.get(url);
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
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const catagoriBySubcatagori = async (data) => {
  try {
    const url = c.URL + "/subcategory/category/" + data;
    const res = await axios.get(url);
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

    return res;
  } catch (e) {
    return e.response;
  }
};

export const user_assignment = async (data, header) => {
  try {
    const url = c.ASSIGNMENT;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    console.log("res---------------", res);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const verification_otp = async (data, header) => {
  try {
    const url = c.VERIFICATION;
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const EDIT_DATE_TIME = async (data, header) => {
  try {
    const url = c.ASSIGNMENT;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    console.log("res---------------", res);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const all_subject = async () => {
  try {
    const url = c.URL + "/subject";
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const catagori_listing = async () => {
  try {
    const url = c.BLOG_CATEGORY + "/blog/category";
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const blog_details = async (data) => {
  try {
    const url = c.BLOG + "/slug/" + data;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const blogCataWishData = async (data) => {
  try {
    const url = c.BLOG + "/category/" + data;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allServices = async () => {
  try {
    const url = c.SERVICES;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const allServicesCata = async () => {
  try {
    const url = c.BLOG_CATEGORY + "/service/category";
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const services_details = async (data) => {
  try {
    const url = c.SERVICES + "/slug/" + data;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const services_cataWishData = async (data) => {
  try {
    const url = c.SERVICES + "/subcategory/" + data;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const jobANswer = async (data, header) => {
  try {
    const url = c.URL + "/job/answer";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
