import React, { useState } from "react";
import * as API from "../api/index";
import { MESSAGE } from "../helpers/commonData";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const [isemail, setIsEmail] = useState(1);
  const [email, setEmail] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [otp, setOtp] = useState("");
  const dataSubmit = async () => {
    if (email) {
      try {
        const reqObj = {
          emailId: email,
        };
        const response = await API.forgotPassword(reqObj);
        console.log("response", response);
        if (response.data.success === 1) {
          setIsEmail(2);
          MESSAGE(response.data.message, 1);
        }
      } catch (error) {}
    } else {
      MESSAGE("Please Enter Email id");
    }
  };

  const commonSubmit6 = async () => {
    const header = localStorage.getItem("_tokenCode");
    if (otp) {
      try {
        const reqObj = {
          emailId: email,
          otp: otp,
        };
        const response = await API.verification_otp(reqObj);
        console.log("SubmitOTPresponse", response);
        if (response.data.success === 1) {
          MESSAGE(response.data.message, 1);
          setIsEmail(3);
        } else {
          MESSAGE(response.data.message);
        }
      } catch {}
    } else {
      MESSAGE("Please Enter OTP");
    }
  };
  const password = async () => {
    if (passwordNew) {
      try {
        const reqObj = {
          emailId: email,
          otp: otp,
          password: passwordNew,
        };
        const response = await API.newPassword(reqObj);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/login");
          MESSAGE(response.data.message, 1);
        }
      } catch (error) {}
    } else {
      MESSAGE("Please Enter New Password");
    }
  };
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="loginBoxMain">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg" />
              </div>
              <div className="col-md-6">
                {isemail === 1 ? (
                  <>
                    <div className="loginBox">
                      <h1>Forgot Password</h1>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div class="btn-box">
                        <div
                          disable={email ? true : false}
                          onClick={dataSubmit}
                          class="btn-style-two theme-btn w-75"
                        >
                          <span class="txt">Login</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : isemail === 2 ? (
                  <>
                    <div className="loginBox">
                      <h1>Email Verification</h1>
                      <div class="form-group">
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          isInputNum
                          containerStyle="otp-input-container forOtp"
                          inputStyle="otp-input"
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>

                      <div class="btn-box">
                        <div
                          disable={otp ? true : false}
                          onClick={commonSubmit6}
                          class="btn-style-two theme-btn w-75"
                        >
                          <span class="txt">SUBMIT</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="loginBox">
                      <h1>Create Password</h1>
                      <div class="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          required=""
                          onChange={(e) => setPasswordNew(e.target.value)}
                        />
                      </div>

                      <div class="btn-box">
                        <div
                          disable={email ? true : false}
                          onClick={password}
                          class="btn-style-two theme-btn w-75"
                        >
                          <span class="txt">SUBMIT</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
