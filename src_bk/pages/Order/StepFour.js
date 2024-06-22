import React from "react";

const StepFour = ({ commonSubmit4, handleRadioChange, selectedOption }) => {
  return (
    <>
      {" "}
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <div className="order_header"></div>
          <h3 className="order_header_titel">Education Lavel</h3>
        </div>
        <div className="col-md-8">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "Freshman" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="Freshman"
                    checked={selectedOption === "Freshman"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  Freshman
                </label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "Pre Final" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="Pre Final"
                    checked={selectedOption === "Pre Final"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  Pre Final
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "Final Year" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="Final Year"
                    checked={selectedOption === "Final Year"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  Final Year
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "Masters" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="Masters"
                    checked={selectedOption === "Masters"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  Masters
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "PHD" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="PHD"
                    checked={selectedOption === "PHD"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  PHD
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="all_button_group">
                <label
                  className={`radioButtonLabel ${
                    selectedOption === "Another PHD" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="academicYear"
                    value="Another PHD"
                    checked={selectedOption === "Another PHD"}
                    onChange={handleRadioChange}
                    className="hiddenRadioInput"
                  />
                  Another PHD
                </label>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="step_buttn" onClick={commonSubmit4}>
                <button class="continue_btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
