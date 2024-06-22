import React from "react";

const StepTwo = ({ commonSubmit2, setEmailData }) => {
  return (
    <>
      {/* ? STEP TWO */}
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="sign_uplft">
            <h4>
              Enter <span className="theme_color">Email</span> or{" "}
              <span className="theme_color">Phone</span> to <br />{" "}
              <span>Sign Up/Sigh In</span>
            </h4>
            <div className="sign_up_field">
              <input
                type="text"
                id="signUp"
                placeholder="john@gmail.com"
                onChange={(e) => setEmailData(e.target.value)}
              ></input>
              <div className="sign_icon">
                <img src="./images/email.png"></img>
              </div>
            </div>

            <div className="grup_btn">
              <button className="btn_one" onClick={commonSubmit2}>
                Continue
              </button>
            </div>
            <h4>
              Hire <span className="theme_color">Tutors</span> for your <br />{" "}
              <span>Homework/Assignment</span>{" "}
              <span className="theme_color">help</span>
            </h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="fill_imag">
            <img src="./images/education.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
