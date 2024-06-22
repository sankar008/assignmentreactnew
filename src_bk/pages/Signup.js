import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="loginBoxMain">
            <div className="row">
              <div className="col-md-6">
                <img src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg" />
              </div>
              <div className="col-md-6">
                <div className="loginBox">
                  <h1>Sign up</h1>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div class="btn-box">
                    <div class="theme-btn btn-style-two w-75">
                      <span class="txt">Signup</span>
                    </div>
                  </div>

                  <p>
                    Already have an account? <Link to="/login">Sign in</Link>
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

export default Signup;
