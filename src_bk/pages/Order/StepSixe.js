import React from "react";
import OtpInput from "react-otp-input";

const StepSixe = ({ commonSubmit6, otp, setOtp, emailData, resendOpt }) => {
  return (
    <>
      {" "}
      <div className="row mt-5" id="singotp">
        <div className="col-lg-6">
          <div className="sign_uplft_otp">
            <h4>
              Enter OTP sent to <br />
              <span className="theme_color"> {emailData}</span> <br />
              <span>Put your OTP Here</span>
            </h4>

            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              isInputNum
              containerStyle="otp-input-container"
              inputStyle="otp-input"
              renderInput={(props) => <input {...props} />}
            />

            <div className="grup_btn d-block">
              <button className="btn_one" onClick={commonSubmit6}>
                Continue
              </button>
              <span
                className="btn_onesbtn_ones d-inline font-bold ml-2 text-success"
                onClick={resendOpt}
              >
                Resend Otp
              </span>
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

export default StepSixe;
