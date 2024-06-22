import React from "react";
import MyModal from "../MyModal";
import { Link } from "react-router-dom";

const StepSeven = ({
  subjectData,
  selectedDate,
  selectedTime,
  handleShow,
  getRangeDate,
  questionCount,
  setSelectedDate,
  setSelectedTime,
  showModal,
  handleClose,
  handleEditSave,
  pageType,
  selectedOption,
  selectedOptionRef,
  pageNumber,
  wordsCount,
}) => {
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
              <span className="sub_fw600">{subjectData}</span>
            </div>

            <div className="flext_liner">
              {pageType === 2 ? (
                <span>Session Time</span>
              ) : (
                <span>Due Date & Time</span>
              )}

              <span className="sub_fw600">
                {selectedDate} {selectedTime}
                <button className="ml-1" onClick={handleShow}>
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
              <span>Education</span>
              <span className="sub_fw600">{selectedOption}</span>
            </div>
            {pageType === 2 ? (
              ""
            ) : (
              <div className="flext_liner">
                <span>Referencing</span>
                <span className="sub_fw600">{selectedOptionRef}</span>
              </div>
            )}

            {pageType === 2 ? (
              <>
                {" "}
                <div className="flext_liner">
                  <span>Duration</span>
                  <span className="sub_fw600">{getRangeDate} min</span>
                </div>
                <div className="flext_liner">
                  <span>No. Of Questions</span>
                  <span className="sub_fw600">{questionCount}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flext_liner">
                  <span>Word Count</span>
                  <span className="sub_fw600">
                    {pageNumber} Pages {wordsCount} Word
                  </span>
                </div>
              </>
            )}

            <div className="full_butn">
              <Link to="/account">
                <button>Book Now</button>
              </Link>
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
      <MyModal
        showModal={showModal}
        handleClose={handleClose}
        setSelectedDate={setSelectedDate}
        setSelectedTime={setSelectedTime}
        handleEditSave={handleEditSave}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </>
  );
};

export default StepSeven;
