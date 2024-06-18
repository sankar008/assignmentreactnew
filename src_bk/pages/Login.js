import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../api/index";
import { MESSAGE } from "../helpers/commonData";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const dataSubmit = async () => {
    if (email && passwordNew) {
      try {
        const reqObj = {
          emailId: email,
          password: passwordNew,
        };
        const response = await API.user_login(reqObj);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/account");
          MESSAGE(response.data.msg, 1);
        } else {
          MESSAGE(response.data.message);
        }
      } catch (error) {}
    } else {
      if (email) {
      } else {
        MESSAGE("Please Enter Email id");
      }
      if (passwordNew) {
      } else {
        MESSAGE("Please Enter Password");
      }
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
                <div className="loginBox">
                  <h1>Login</h1>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required=""
                      onChange={(e) => setPasswordNew(e.target.value)}
                    />
                  </div>
                  <div class="btn-box">
                    <div
                      onClick={dataSubmit}
                      class="btn-style-two theme-btn w-75"
                    >
                      <span class="txt">Login</span>
                    </div>
                  </div>
                  <p>
                    <Link className="text-danger" to="/forgot-password">
                      Forgot password
                    </Link>
                  </p>
                  <p>
                    Don’t have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
