import React from "react";
import Select from "react-select";
import MultipleFileUploader from "../MultipleFileUploader";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
const StepOne = ({
  commonSubmit1,
  handleUpload,
  selectedFiles,
  setSelectedFiles,
  setDetailsData,
  setSubjectData,
  subjectOptions,
  handleChange,
  subjectData,
}) => {
  const simplifiedSubjects = subjectOptions.map((subject) => ({
    id: subject._id,
    name: subject.subjectName,
  }));
  console.log("subjectOptions", simplifiedSubjects);

  const handleOnSelect = (subjectOptions) => {
    // the item selected
    setSubjectData(subjectOptions.name);
  };
  const handleOnSearch = (string) => {
    setSubjectData(string);
  };

  const formatResult = (subjectOptions) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {subjectOptions.name}
        </span>
      </>
    );
  };
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
              maxFileCount={15}
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
            <ReactSearchAutocomplete
              items={simplifiedSubjects}
              placeholder="Subject"
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
              onSearch={handleOnSearch}
            />
            {/* <Select
              styles={customStyles}
              options={subjectOptions}
              value={subjectData}
              onChange={handleChange}
            /> */}

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
