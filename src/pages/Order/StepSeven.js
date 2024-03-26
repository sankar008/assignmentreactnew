import React from "react";

const StepSeven = () => {
  return (
    <>
      {" "}
      <div className="row items-center justify-content-center mt-5">
        <div className="col-lg-12">
          <div className="order_header"></div>
          <h3 className="order_header_titel">Order Review</h3>
        </div>
        <div className="col-lg-6" id="paymentpt1">
          <div className="sort_tbl">
            <div className="flext_liner"></div>
            <div className="flext_liner">
              <span>Subject</span>
              <span className="sub_fw600">sfs</span>
            </div>

            <div className="flext_liner">
              <span>Service Type</span>
              <span className="sub_fw600">Session</span>
            </div>

            <div className="flext_liner">
              <span>Start Time</span>
              <span className="sub_fw600">
                data, time
                <button className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>{" "}
                </button>
              </span>
            </div>
            <div className="flext_liner">
              <span>Duration</span>
              <span className="sub_fw600">2525 min</span>
            </div>
            <div className="flext_liner">
              <span>No. Of Questions</span>
              <span className="sub_fw600">25</span>
            </div>

            {/* <div className="flext_liner">
                      <span>Duration</span>
                      <span className="sub_fw600">{getRangeDate} Min</span>
                    </div>
                    <div className="flext_liner ex_border">
                      <span>No of Question</span>
                      <span className="sub_fw600">{questionCount}</span>
                    </div> */}
            {/* <div className="flext_liner">
                      <span className="sub_fw600">Payable amount</span>
                      <span className="sub_fw600">
                        <span className="fz_extra">191 </span>USD
                      </span>
                    </div> */}
            <div className="full_butn">
              <a href="#">
                <button>Book Now</button>
              </a>
            </div>
            <div className="face_img_txt">
              <img src="./images/sad.png"></img>
              <span>
                <strong>575 Tutors</strong> Avilable for ddm
              </span>
            </div>
          </div>
          <div className="subs_input hide">
            <div className="subs_toper">
              <span>
                <strong>Have Rental Code</strong>
              </span>
              <span>
                Get <span className="color_spanr"> 30% </span>{" "}
                <span className="color_colortxt"> % </span>{" "}
                <span className="color_spanr"> off </span>on your{" "}
                <span className="color_colortxt"> 1st order</span>
              </span>
            </div>
            <input
              type="text"
              id="cupon"
              placeholder="Referal Link/ Ceferal Code"
            ></input>
          </div>
          <div className="sub_points">
            <div className="sub_linl">
              <img src="./images/pencil.png"></img>
              <strong>
                Unlimited <br /> Rewrite
              </strong>
            </div>
            <div className="border_vartical"></div>
            <div className="sub_linl">
              <img src="./images/money-back.png"></img>
              <strong>
                Money back <br /> Gurentee
              </strong>
            </div>
            <div className="border_vartical"></div>
            <div className="sub_linl">
              <img src="./images/shield.png"></img>
              <strong>
                Payment <br /> Security
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSeven;
