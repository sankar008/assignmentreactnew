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
