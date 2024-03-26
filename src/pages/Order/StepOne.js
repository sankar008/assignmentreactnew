import React from "react";
import Select from "react-select";
import MultipleFileUploader from "../MultipleFileUploader";

const StepOne = ({
  commonSubmit1,
  handleUpload,
  selectedFiles,
  setSelectedFiles,
  setDetailsData,
  customStyles,
  subjectOptions,
  handleChange,
  subjectData,
}) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="order_header"></div>
          <h3 className="order_header_titel">Post Questions</h3>
        </div>

        <div className="col-md-6">
          <div className="file-uploader-wrapper">
            <MultipleFileUploader
              maxFileCount={3}
              onUpload={handleUpload}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="massg_input">
            <textarea
              type="text"
              rows="9"
              id="msag"
              onChange={(e) => setDetailsData(e.target.value)}
              placeholder="Type your Question here"
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="text_input">
            <Select
              styles={customStyles}
              options={subjectOptions}
              value={subjectData}
              onChange={handleChange}
            />

            <div className="step_buttn">
              <button>
                <button onClick={commonSubmit1} className="continue_btn">
                  Continue
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
