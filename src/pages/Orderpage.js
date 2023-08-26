import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import OrderFrom from "../components/OrderFrom";

const Orderpage = () => {
  const location = useLocation();
  console.log("location", location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="Order_section">
        <div className="container">
          {location.state.data === 1 ? (
            <>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Post Questions</h3>
                </div>
                <div className="col-md-4">
                  <div className="drag_input">
                    <input type="file" id="drag"></input>
                    <div className="drag_overlay">
                      <div className="center_droper">
                        <img src="./images/page.png"></img>
                        <p>
                          Drop your filr or <span>Browser</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="massg_input">
                    <textarea
                      type="text"
                      id="msag"
                      placeholder="Type your Question here"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="big_sercbar">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search your Subject"
                    ></input>
                    <div className="src_icons">
                      <img src="./images/loupe.png"></img>
                    </div>
                    <div className="step_buttn">
                      <a href="#">
                        <button className="continue_btn" disabled>
                          Continue
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="sign_uplft">
                    <h4>
                      Enter <span className="theme_color">Enail</span> or{" "}
                      <span className="theme_color">Phone</span> to <br />{" "}
                      <span>Sign Up/Sigh In</span>
                    </h4>
                    <div className="sign_up_field">
                      <input
                        type="text"
                        id="signUp"
                        placeholder="john@gmail.com"
                      ></input>
                      <div className="sign_icon">
                        <img src="./images/email.png"></img>
                      </div>
                    </div>
                    <div className="grup_btn">
                      <a href="#">
                        <button className="btn_one">Continue</button>
                      </a>
                      <span>or</span>
                      <a href="#">
                        <button className="buttn_googl">
                          <img src="./images/google.png"></img> Continue With
                          Google
                        </button>
                      </a>
                    </div>
                    <h4>
                      Hire <span className="theme_color">Tutors</span> for your{" "}
                      <br /> <span>Homework/Assignment</span>{" "}
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
          ) : location.state.data === 2 ? (
            <>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Subject</h3>
                </div>
                <div className="col-md-8">
                  <div className="big_sercbar">
                    <select
                      class="form-select form_select_icons"
                      aria-label="Default select example"
                    >
                      <option selected>Computer Network</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="src_icons">
                      <img src="./images/loupe.png"></img>
                    </div>
                    <div className="step_buttn">
                      <a href="#">
                        <button className="continue_btn" disabled>
                          Continue
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Date & Time</h3>
                </div>
              </div>

              <div className="row justify-content-center mb-5">
                <div className="col-lg-3">
                  <div className="timePicer">
                    <span>Select Date</span>
                    <br />
                    <img src="./images/calendar.png"></img> <br />
                    <input
                      type="date"
                      id="date_picker"
                      placeholder="01/01/2023"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="timePicer">
                    <span>Select Time</span> <br />
                    <img src="./images/chronometer.png"></img> <br />
                    <input
                      type="time"
                      id="time_picker"
                      placeholder="00:00:00"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row col-lg-12">
                <div className="step_buttn">
                  <a href="#">
                    <button className="continue_btn" disabled>
                      Continue
                    </button>
                  </a>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Duration</h3>
                </div>

                <div className="col-md-7">
                  <div className="rang_toper">
                    <div className="icon_with_timer">
                      <img src="./images/stopwatch.png"></img>
                      <span>
                        <strong> 30 </strong> Min
                      </span>
                    </div>
                    <div className="icon_with_timer">
                      <img src="./images/question.png"></img>
                      <span>
                        <strong> 2-3 </strong> Questions
                      </span>
                    </div>
                  </div>
                  <div className="rang_body">
                    <input type="range" id="ranger"></input>
                  </div>
                  <div className="rang_value">
                    <span>0</span>
                    <span>30</span>
                    <span>60</span>
                    <span>90</span>
                    <span>120</span>
                    <span>150</span>
                    <span>180</span>
                    <span>210</span>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="step_buttn">
                    <a href="#">
                      <button class="continue_btn" disabled="">
                        Continue
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                  <div className="sort_tbl">
                    <div className="flext_liner">
                      <strong>Order Review</strong>
                      <button>
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
                        Edit
                      </button>
                    </div>
                    <div className="flext_liner">
                      <span>Subject</span>
                      <span className="sub_fw600">Computer Network</span>
                    </div>

                    <div className="flext_liner">
                      <span>Service Type</span>
                      <span className="sub_fw600">Session</span>
                    </div>

                    <div className="flext_liner">
                      <span>Start Time</span>
                      <span className="sub_fw600">May 22, 12:28 am</span>
                    </div>
                    <div className="flext_liner">
                      <span>Duration</span>
                      <span className="sub_fw600">120 Min</span>
                    </div>
                    <div className="flext_liner ex_border">
                      <span>No of Question</span>
                      <span className="sub_fw600">8-9</span>
                    </div>
                    <div className="flext_liner">
                      <span className="sub_fw600">Payable amount</span>
                      <span className="sub_fw600">
                        <span className="fz_extra">191 </span>USD
                      </span>
                    </div>
                    <div className="full_butn">
                      <a href="#">
                        <button>Pay Now</button>
                      </a>
                    </div>
                    <div className="face_img_txt">
                      <img src="./images/sad.png"></img>
                      <span>
                        <strong>575 Tutors</strong> Avilable for Computer
                        Network
                      </span>
                    </div>
                  </div>
                  <div className="subs_input">
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
          ) : (
            <>
              <div className="row justify-content-center mt-5">
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Education Lavel</h3>
                </div>
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>High School</button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>Freshman</button>
                        </a>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>Pre Final</button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>Final Year</button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>Masters</button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>PHD</button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="all_button_group">
                        <a href="#">
                          <button>PHD</button>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="step_buttn">
                        <a href="#">
                          <button class="continue_btn">Continue</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Easy Details</h3>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="drag_input">
                    <input type="file" id="drag"></input>
                    <div className="drag_overlay">
                      <div className="center_droper">
                        <img src="./images/page.png"></img>
                        <p>
                          Drop your filr or <span>Browser</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="massg_input">
                    <textarea
                      type="text"
                      id="msag"
                      placeholder="Type your Question here"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="border_radio">
                    <span>
                      <strong>Spaing:</strong>{" "}
                    </span>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      ></input>
                      <label class="form-check-label" for="exampleRadios1">
                        Single
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      ></input>
                      <label class="form-check-label" for="exampleRadios2">
                        Double
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                      ></input>
                      <label class="form-check-label" for="exampleRadios3">
                        All
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="step_buttn">
                    <a href="#">
                      <button class="continue_btn">Continue</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                  <div className="sort_tbl">
                    <div className="flext_liner">
                      <strong>Order Review</strong>
                      <button>
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
                        Edit
                      </button>
                    </div>
                    <div className="flext_liner">
                      <span>Subject</span>
                      <span className="sub_fw600">Computer Network</span>
                    </div>

                    <div className="flext_liner">
                      <span>Service Type</span>
                      <span className="sub_fw600">Session</span>
                    </div>

                    <div className="flext_liner">
                      <span>Start Time</span>
                      <span className="sub_fw600">May 22, 12:28 am</span>
                    </div>
                    <div className="flext_liner">
                      <span>Duration</span>
                      <span className="sub_fw600">120 Min</span>
                    </div>
                    <div className="flext_liner ex_border">
                      <span>No of Question</span>
                      <span className="sub_fw600">8-9</span>
                    </div>
                    <div className="flext_liner">
                      <span className="sub_fw600">Payable amount</span>
                      <span className="sub_fw600">
                        <span className="fz_extra">191 </span>USD
                      </span>
                    </div>
                    <div className="full_butn">
                      <a href="#">
                        <button>Pay Now</button>
                      </a>
                    </div>
                    <div className="face_img_txt">
                      <img src="./images/sad.png"></img>
                      <span>
                        <strong>575 Tutors</strong> Avilable for Computer
                        Network
                      </span>
                    </div>
                  </div>
                  <div className="subs_input">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Orderpage;
