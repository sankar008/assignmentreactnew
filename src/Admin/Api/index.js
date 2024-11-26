import axios from "axios";
import * as c from "../../Admin/Api/constant";

// ? REGISTRATION API
export const admin_login = async (data) => {
  try {
    const url = c.ADMIN;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? REGISTRATION API
export const forgot_password = async (data) => {
  try {
    const url = c.ADMIN + "/forgot-password";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const admin_mailVerifi = async (data) => {
  try {
    const url = c.ADMIN + "/otp-verification/" + data.id + "/" + data.otp;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const reset_password_buyer = async (data) => {
  try {
    const url = c.BLOG_CATEGORY + "/reset-password";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const add_categoris = async (data, header) => {
  try {
    const url = c.BLOG_CATEGORY;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const add_subcategoris = async (data, header) => {
  try {
    const url = c.SUB_CATEGORY;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const edit_categoris = async (data, header) => {
  try {
    const url = c.BLOG_CATEGORY;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const catagori_listing = async (header, apiType) => {
  console.log("apiType", apiType);
  try {
    const url = c.BLOG_CATEGORY;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const catagori_listing_sub = async (header) => {
  try {
    const url = c.BLOG_CATEGORY;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const catagori_listing_byid = async (data, header) => {
  try {
    const url = c.BLOG_CATEGORY + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const categori_delete = async (data, header, apiType) => {
  try {
    const url = c.BLOG_CATEGORY + "/" + data;
    const res = await axios.delete(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const subcategori_delete = async (data, header, apiType) => {
  try {
    const url = c.SUB_CATEGORY + "/" + data;
    const res = await axios.delete(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? **** TEACHER
export const add_teacher = async (data, header) => {
  try {
    const url = c.URL + "/teacher";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const edit_teacher = async (data, header) => {
  try {
    const url = c.URL + "/teacher";
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const all_teacher = async (header) => {
  try {
    const url = c.URL + "/teacher";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const byid_teacher = async (data, header) => {
  try {
    const url = c.URL + "/teacher/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const delete_teacher = async (data, header) => {
  try {
    const url = c.URL + "/teacher/" + data;
    const res = await axios.delete(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? SUB-CATAGORIS

export const add_blog = async (data, header) => {
  try {
    const url = c.BLOG;
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
export const byid_blog = async (data, header) => {
  try {
    const url = c.BLOG + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const byid_services = async (data, header) => {
  try {
    const url = c.SERVICES + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const edit_services = async (data, header) => {
  try {
    const url = c.SERVICES;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const edit_blog = async (data, header) => {
  try {
    const url = c.BLOG;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const catagori_listing_blog = async (header) => {
  try {
    const url = c.BLOG;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const delete_blog = async (data, header) => {
  try {
    const url = c.BLOG + "/" + data;
    const res = await axios.delete(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? Services Api

export const delete_services = async (data, header) => {
  try {
    const url = c.SERVICES + "/" + data;
    const res = await axios.delete(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const all_services = async (header) => {
  try {
    const url = c.SERVICES;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const add_services = async (data) => {
  try {
    const url = c.URL + "/service";
    const res = await axios.post(url, data);
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
