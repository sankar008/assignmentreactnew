import React, { useState } from "react";
import MultipleFileUploader from "./MultipleFileUploader";
import * as API from "../api/index";
import { MESSAGE } from "../helpers/commonData";
import { useNavigate, useParams } from "react-router";
const Solutions = () => {
  const [messageData, setMessageData] = useState("");
  const [imageData, setImageData] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  const handleUpload = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        assignmentId: params.id,
        details: messageData,
        image: imageData,
      };
      console.log("reqObj", reqObj);
      const response = await API.jobANswer(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.data, 1);
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="answerPPost">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="order_header"></div>
              <h1 className="order_header_titel">Post Answer</h1>
            </div>

            <div className="col-md-6">
              <div className="file-uploader-wrapper">
                <label className="jobAn" for="file">
                  Upload File Here
                </label>
                <input onChange={imageUploading} type="file" hidden id="file" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="massg_input">
                <textarea
                  type="text"
                  rows="9"
                  id="msag"
                  onChange={(e) => setMessageData(e.target.value)}
                  placeholder="Type your Question here"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="text_input">
                <div className="step_buttn">
                  <button>
                    <button onClick={handleUpload} className="continue_btn">
                      Submit
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
