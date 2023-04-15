import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                    <div class="btn-style-two theme-btn w-75">
                      <span class="txt">Login</span>
                    </div>
                  </div>
                  <p>
                    <Link className="text-danger" to="/login">
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
