import React from "react";

const StepFive = ({
  wordsCount,
  pageNumber,
  handleDecrement,
  handleIncrement,
  commonSubmit5,
  pageType,
  selectedOptionRef,
  handleRadioChangeRef,
  getRangeDate,
  questionCount,
  handleRangeChange,
}) => {
  return (
    <>
      {pageType === 2 ? (
        <>
          {" "}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="order_header"></div>
              <h3 className="order_header_titel">Duration</h3>
            </div>

            <div className="col-md-7">
              <div className="rang_toper">
                <div className="icon_with_timer">
                  <img src="./images/stopwatch.png" alt="stopwatch" />
                  <span>
                    <strong> {getRangeDate}</strong> Min
                  </span>
                </div>
                <div className="icon_with_timer">
                  <img src="./images/question.png" alt="question" />
                  <span>
                    <strong>{questionCount}</strong> Questions
                  </span>
                </div>
              </div>
              <div className="rang_body">
                <input
                  type="range"
                  id="ranger"
                  min="0"
                  max="180"
                  value={getRangeDate}
                  onChange={handleRangeChange}
                  step="5"
                />
              </div>
              <div className="rang_value">
                <span>0</span>
                <span>30</span>
                <span>60</span>
                <span>90</span>
                <span>120</span>
                <span>150</span>
                <span>180</span>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="step_buttn">
                <button className="continue_btn" onClick={commonSubmit5}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="order_header"></div>
            <h3 className="order_header_titel">Referencing</h3>
          </div>
          <div className="col-md-8">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "APA" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="APA"
                      checked={selectedOptionRef === "APA"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    APA
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "Harvard" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="Harvard"
                      checked={selectedOptionRef === "Harvard"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    Harvard
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "MLA" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="MLA"
                      checked={selectedOptionRef === "MLA"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    MLA
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "IEEE" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="IEEE"
                      checked={selectedOptionRef === "IEEE"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    IEEE
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "Vancouver" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="Vancouver"
                      checked={selectedOptionRef === "Vancouver"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    Vancouver
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="all_button_group">
                  <label
                    className={`radioButtonLabel ${
                      selectedOptionRef === "Oscola" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="academicYear"
                      value="Oscola"
                      checked={selectedOptionRef === "Oscola"}
                      onChange={handleRadioChangeRef}
                      className="hiddenRadioInput"
                    />
                    Oscola
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="order_header"></div>
            <h3 className="order_header_titel">Words Count</h3>
            <div className="icon_with_timer">
              <button className="page_button" onClick={handleIncrement}>
                +
              </button>
              <input className="page_input" value={pageNumber} readOnly />
              <button className="page_button" onClick={handleDecrement}>
                -
              </button>
              <span className="wordcount">
                <strong>{wordsCount}</strong>
              </span>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="step_buttn">
              <button class="continue_btn" onClick={commonSubmit5}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StepFive;
