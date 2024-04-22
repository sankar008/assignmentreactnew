import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import OrderFrom from "../components/OrderFrom";
import "../App.css";
import OtpInput from "react-otp-input";
import * as API from "../api/index";
import moment from "moment-timezone";
import dateFormat, { masks } from "dateformat";
import * as Yup from "yup";
import Select from "react-select";
import MultipleFileUploader from "./MultipleFileUploader";
import MyModal from "./MyModal";
import { MESSAGE } from "../Admin/helpers/commonData";

import StepOne from "./Order/StepOne";
import StepTwo from "./Order/StepTwo";
import StepThree from "./Order/StepThree";
import StepFour from "./Order/StepFour";
import StepFive from "./Order/StepFive";
import StepSixe from "./Order/StepSixe";
import StepSeven from "./Order/StepSeven";
import { ToastContainer } from "react-toastify";
let datepick = "";
let timepix = "";
const currentDate = new Date().toISOString().split("T")[0];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    marginBottom: "30px",
    position: "relative",
    marginTop: "20px",
  }),
  input: (provided) => ({
    ...provided,
    height: "42px",
    borderRadius: "6px",
    // border: '1px solid #ddd',
    width: "100%",
    paddingLeft: "14px",
    /* color: '#ddd', */
  }),
};
const OrderNew = () => {
  const location = useLocation();
  const [stapeStart, setStapeStart] = useState(1);
  const [stapeThree, setStapeThree] = useState(0);
  const [stapeFour, setStapeFour] = useState(0);
  const [stapeFive, setStapeFive] = useState(0);
  const [stapeSix, setStapeSix] = useState(0);
  const [stapeSeven, setStapeSeven] = useState(0);
  const [subjectOptions, setSubjectOptions] = useState([]);

  const commonSubmit1 = () => {
    console.log("selectedFiles", selectedFiles);
    if (
      detailsData === "" ||
      subjectData === "" ||
      selectedFiles.length === 0
    ) {
      MESSAGE(
        selectedFiles.length === 0
          ? "Please Upload File Here "
          : detailsData === ""
          ? " Please Enter Questions"
          : subjectData === ""
          ? "Please Enter Subject"
          : ""
      );
    } else {
      setStapeStart(2);
      setStapeThree(3);
    }
  };
  const commonSubmit2 = async () => {
    if (emailData !== "") {
      setStapeSix("");
      if (selectedOptionRef === null) {
        const header = localStorage.getItem("_tokenCode");
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData,
          emailId: emailData,
          image: selectedFiles.map((p) => {
            return p.preview;
          }),
          education: selectedOption,
          date: selectedDate,
          time: selectedTime,
          wordsCount: pageNumber,
          duration: getRangeDate,
        };
        console.log("reqObj222", reqObj);
        const response = await API.user_assignment(reqObj, header);
        console.log("response====", response);
        if (response.data.success === 1) {
          console.log("heloooo");
          setStapeFive("");
          setStapeStart(2);
        } else {
        }
      } else {
        const header = localStorage.getItem("_tokenCode");
        try {
          if (location.state?.data === 1 || location.state?.data === 3) {
            const reqObj = {
              type: 1,
              details: detailsData,
              subject: subjectData,
              emailId: emailData,
              image: selectedFiles.map((p) => {
                return p.preview;
              }),
              education: selectedOption,
              referencing: selectedOptionRef,
              date: selectedDate,
              time: selectedTime,
              wordsCount: pageNumber,
            };
            console.log("reqObj", reqObj);
            const response = await API.user_assignment(reqObj, header);
            console.log("responseType1", response);
            if (response?.data?.success === 1) {
              setStapeFive("");
              setStapeStart(2);
              localStorage.setItem("_userId", response.data.data._id);
            } else {
              setStapeFive("");
              setStapeSix(6);
            }
          } else {
          }
        } catch (error) {}
      }
    } else {
      MESSAGE("Please Enter Your Email id");
    }
  };

  const commonSubmit3 = () => {
    setStapeThree("");
    setStapeFour(4);
  };

  const commonSubmit4 = () => {
    if (selectedOption === null) {
      MESSAGE("Please Select Your Education Lavel");
    } else {
      setStapeFour("");
      setStapeFive(5);
    }
  };
  const commonSubmit5 = async () => {
    if (location?.state?.data === 1 || location?.state?.data === 3) {
      if (selectedOptionRef === null) {
        MESSAGE("Please Select Your Referencing Type");
      } else {
        setStapeFive("");
        setStapeSix(6);
      }
    } else {
      if (getRangeDate === 0) {
        MESSAGE("Please Select Duration");
      } else {
        setStapeFive("");
        setStapeSix(6);
      }
    }
  };

  const commonSubmit6 = async () => {
    const header = localStorage.getItem("_tokenCode");
    if (otp) {
      try {
        const reqObj = {
          emailId: emailData,
          otp: otp,
        };
        const response = await API.verification_otp(reqObj, header);
        console.log("SubmitOTPresponse", response);
        if (response.data.success === 1) {
          setStapeStart("");
          setStapeSeven(7);
          MESSAGE(response.data.message, 1);
        } else {
          MESSAGE(response.data.message);
        }
      } catch {}
    }
  };

  const [pageNumber, setPageNumber] = useState(1);
  const [detailsData, setDetailsData] = useState("");
  const [imageData, setImageData] = useState("");
  const [subjectData, setSubjectData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [finalOrderPage, setFinalOrderPage] = useState("hide");
  const [otp, setOtp] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionRef, setSelectedOptionRef] = useState(null);
  const [selectedSpaingValue, setSelectedSpaingValue] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log("subjectData", subjectData);
  //duration function and state

  const [getRangeDate, setGetRangeDate] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  console.log("getRangeDate", getRangeDate);
  console.log("questionCount", questionCount);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setGetRangeDate(value);

    // Calculate the question count based on the selected duration
    const additionalQuestions = Math.floor(value / 15) * 2;
    setQuestionCount(additionalQuestions);
  };
  // -------------

  const handleChange = (selectedOption) => {
    setSubjectData(selectedOption);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleRadioChangeRef = (event) => {
    setSelectedOptionRef(event.target.value);
  };

  const handleRadioChangeForSpaing = (event) => {
    setSelectedSpaingValue(event.target.value);
  };

  const [FormSate, setFormSate] = useState({
    detailsData: "",
    imageData: "",
    subjectData: "",
    emailData: "",
    selectedSubject: [],
    selectedDate: "",
    selectedTime: "",
    getRangeDate: "",
    otp: "",
  });

  const [showSignUpSection, setShowSignUpSection] = useState(true);

  const [showSignUpSection1, setShowSignUpSection1] = useState(false);
  const [showSignUpSection2, setShowSignUpSection2] = useState(false);
  const [showSignUpSection3, setShowSignUpSection3] = useState(false);
  const [showSignUpSection4, setShowSignUpSection4] = useState(false);
  const [showSignUpSection6, setShowSignUpSection6] = useState(false);
  const [showSignUpSection7, setShowSignUpSection7] = useState(false);
  const [showSignUpSectionRadio, setshowSignUpSectionRadio] = useState(false);
  const [id, setID] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const options = [
    {
      label: "Computer Seience",
      value: "Computer Seience",
    },
    {
      label: "Life Seience",
      value: "Life Seience",
    },
    {
      label: "History",
      value: "History",
    },
    {
      label: "Bengali",
      value: "Bengali",
    },
  ];

  const imageUploading = (e) => {
    let images = e.target.files[0];

    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  useMemo(() => {
    if (detailsData === "") {
      setShowSignUpSection1(false);
    }
    if (subjectData === "") {
      setShowSignUpSection1(false);
    }
  }, [detailsData, subjectData, selectedFiles]);

  const commonSubmit1s = () => {
    if (detailsData !== "" && subjectData !== "" && selectedFiles !== "") {
      setShowSignUpSection(false);
      setShowSignUpSection1(true);
    } else {
      setShowSignUpSection(true);
      setShowSignUpSection1(false);
    }
  };

  const commonSubmit2s = () => {
    if (emailData !== "") {
      setShowSignUpSection1(false);
      setShowSignUpSection3(true);
    } else {
      setShowSignUpSection1(true);
      setShowSignUpSection3(false);
    }
  };

  const commonSubmit3s = () => {
    if (selectedSubject !== "") {
      setShowSignUpSection2(false);
      setShowSignUpSection3(true);
    } else {
      setShowSignUpSection2(true);
      setShowSignUpSection3(false);
    }
  };

  const educationLabel = () => {
    if (selectedOption !== "") {
      setShowSignUpSection3(false);
      setShowSignUpSection4(true);
    } else {
      setShowSignUpSection3(true);
      setShowSignUpSection4(false);
    }
  };
  const setionthreeDateandTime = () => {
    if (selectedDate !== "" || selectedTime !== "") {
      setShowSignUpSection4(false);
      setShowSignUpSection6(true);
    } else {
      setShowSignUpSection4(true);
      setShowSignUpSection6(false);
    }
  };

  const dataSubmit = async (e) => {
    e.preventDefault();
    const header = localStorage.getItem("_tokenCode");
    try {
      if (location.state?.data === 1) {
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData?.label,
          emailId: emailData,
          image: selectedFiles.map((p) => {
            return p.preview;
          }), //imageData,
          //education: selectedSubject,
          education: "test",
          date: selectedDate,
          time: selectedTime,
          wordsCount: 120,
          duration: getRangeDate,
        };
        const response = await API.user_assignment(reqObj, header);
        if (response?.data?.success === 1) {
          console.log(response);
          setID(response?.data?.data?.id);
          setShowSignUpSection6(false);
          setShowSignUpSection7(true);
        } else {
          setShowSignUpSection6(true);
          setShowSignUpSection7(false);
        }
      }

      if (location.state?.data === 2) {
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData?.label,
          emailId: emailData,
          image: selectedFiles.map((p) => {
            return p.preview;
          }),
          // education: selectedSubject,
          education: "abc",
          date: selectedDate,
          time: selectedTime,
          wordsCount: 120,
          duration: getRangeDate,
        };
        const response = await API.user_assignment(reqObj, header);
        console.log("response==================", response);
        if (response?.data?.success === 1) {
          console.log(response);
          setID(response?.data?.data?.id);

          setShowSignUpSection6(false);
          setShowSignUpSection7(true);
        } else {
          setShowSignUpSection6(true);
          setShowSignUpSection7(false);
        }
      }

      if (location.state?.data === 3) {
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData?.label,
          emailId: emailData,
          // image: imageData,
          image: selectedFiles.map((p) => {
            return p.preview;
          }),
          education: "test",
          date: selectedDate,
          time: selectedTime,
          wordsCount: wordsCount,
          duration: getRangeDate,
          spacing: showSignUpSectionRadio,
        };
        const response = await API.user_assignment(reqObj, header);
        console.log("response==================", response);
        if (response?.data?.success === 1) {
          console.log(response);
          setID(response?.data?.data?._id);

          setShowSignUpSection6(false);
          setShowSignUpSection7(true);
        } else {
          setShowSignUpSection6(true);
          setShowSignUpSection7(false);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    // Get the current date in the format YYYY-MM-DD
    const currentDate2 = new Date().toISOString().split("T")[0];
    const currettime = new Date()
      .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour12: false })
      .slice(0, 5);

    // console.log('Current time in India:', currentTime);
    //     const currettime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).slice(11, 16);

    // Set the current date as the default value
    setSelectedTime(currettime);
    setSelectedDate(currentDate2);
  }, []);

  const SubmitOTP = async (e) => {
    e.preventDefault();
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        emailId: emailData,
        otp: otp,
      };

      const response = await API.verification_otp(reqObj, header);
      console.log("SubmitOTP----------------response", response);

      const sortTblElements = document.getElementById("paymentpt");
      const sortTblElements1 = document.getElementById("paymentpt1");
      const sortTblElements2 = document.getElementById("paymentpt2");

      // const signUpOtpElements = document.getElementsByClassName('sign_uplft_otp');
      const signUpOtpElements = document.getElementById("singotp");
      const signUpOtpElements2 = document.getElementById("singotp2");
      const signUpOtpElements3 = document.getElementById("singotp3");

      if (response.data.success === 1) {
        // MESSAGE(response.data.message, 1);

        // Assuming there is only one element with class 'sort_tbl'
        if (sortTblElements) {
          sortTblElements.style.display = "block";
        }
        if (sortTblElements1) {
          sortTblElements1.style.display = "block";
        }
        if (sortTblElements2) {
          sortTblElements2.style.display = "block";
        }
        if (signUpOtpElements) {
          signUpOtpElements.style.display = "none";
        }
        if (signUpOtpElements2) {
          signUpOtpElements2.style.display = "none";
        }
        if (signUpOtpElements3) {
          signUpOtpElements3.style.display = "none";
        }

        MESSAGE(response.data.message, 1);
      } else if (response.data.success === 0) {
        if (sortTblElements) {
          sortTblElements.style.display = "none";
        }
        if (sortTblElements1) {
          sortTblElements1.style.display = "none";
        }
        if (sortTblElements2) {
          sortTblElements2.style.display = "none";
        }

        if (signUpOtpElements) {
          signUpOtpElements.style.display = "flex";
        }
        if (signUpOtpElements2) {
          signUpOtpElements2.style.display = "flex";
        }
        if (signUpOtpElements3) {
          signUpOtpElements3.style.display = "flex";
        }
        MESSAGE(response.data.message, 0);

        // alert('Enter the correct OTP');
      } else {
        if (sortTblElements) {
          sortTblElements.style.display = "none";
        }
        if (sortTblElements1) {
          sortTblElements1.style.display = "none";
        }
        if (sortTblElements2) {
          sortTblElements2.style.display = "none";
        }

        if (signUpOtpElements) {
          signUpOtpElements.style.display = "flex";
        }
        if (signUpOtpElements2) {
          signUpOtpElements2.style.display = "flex";
        }
        if (signUpOtpElements3) {
          signUpOtpElements3.style.display = "flex";
        }
        MESSAGE(response.data.message, 0);
      }
      setFinalOrderPage("");
    } catch (error) {}
  };

  useMemo(() => {
    if (selectedDate !== "") {
      const dateDate = dateFormat(selectedDate, "mmmm dS, h:MM:ss TT");
    } else {
      return false;
    }
  }, [selectedDate]);

  const visibaleSection6 = () => {
    // setShowSignUpSection3(true);

    if (selectedDate !== "" && selectedTime !== "") {
      setShowSignUpSection3(false);
      setShowSignUpSection6(true);
    } else {
      setShowSignUpSection3(true);
      setShowSignUpSection6(false);
    }
  };

  const visibaleSection7 = () => {
    if (getRangeDate !== "") {
      setshowSignUpSectionRadio(true);
    } else {
      setshowSignUpSectionRadio(false);
    }
  };

  const handleIncrement = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleDecrement = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  // Calculate word count based on page number
  const wordsCount = pageNumber * 250;

  const editTimeDate = () => {
    setShowSignUpSection3(true);
  };

  const handleUpload = (selectedImages) => {
    // Do something with the selected images (e.g., send to the server)
    console.log(selectedImages);
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    const header = localStorage.getItem("_tokenCode");

    datepick = selectedDate;
    timepix = selectedTime;
    setShowModal(false);
    try {
      const reqObj = {
        date: selectedDate,
        time: selectedTime,
        id: localStorage.getItem("_userId"),
      };

      console.log("reqObj", reqObj);

      const response = await API.EDIT_DATE_TIME(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
      }
    } catch (error) {}
  };

  const allSubject = async () => {
    try {
      const response = await API.all_subject();
      setSubjectOptions(response.data.data);
      console.log("response", response);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    allSubject();
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="Order_section">
        <div className="container">
          {location?.state?.data === 1 ? (
            <>
              {/* ? STEP ONE */}
              {stapeStart === 1 ? (
                <StepOne
                  setStapeStart={setStapeStart}
                  commonSubmit1={commonSubmit1}
                  handleUpload={handleUpload}
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                  setDetailsData={setDetailsData}
                  customStyles={customStyles}
                  subjectOptions={subjectOptions}
                  setSubjectData={setSubjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 20 ? (
                <></>
              ) : stapeThree === 3 ? (
                <StepThree
                  commonSubmit3={commonSubmit3}
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              ) : stapeFour === 4 ? (
                <StepFour
                  commonSubmit4={commonSubmit4}
                  handleRadioChange={handleRadioChange}
                  selectedOption={selectedOption}
                />
              ) : stapeFive === 5 ? (
                <StepFive
                  commonSubmit5={commonSubmit5}
                  selectedOptionRef={selectedOptionRef}
                  handleRadioChangeRef={handleRadioChangeRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
              ) : stapeSix === 6 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
              ) : stapeStart === 2 ? (
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : stapeSeven === 7 ? (
                <StepSeven
                  pageType={location.state?.data}
                  subjectData={subjectData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  handleShow={handleShow}
                  getRangeDate={getRangeDate}
                  questionCount={questionCount}
                  showModal={showModal}
                  handleEditSave={handleEditSave}
                  setSelectedDate={setSelectedDate}
                  setSelectedTime={setSelectedTime}
                  handleClose={handleClose}
                  selectedOption={selectedOption}
                  selectedOptionRef={selectedOptionRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                />
              ) : (
                ""
              )}
            </>
          ) : location.state?.data === 2 ? (
            <>
              {/* ? STEP TWO */}
              {stapeStart === 1 ? (
                <StepOne
                  setStapeStart={setStapeStart}
                  commonSubmit1={commonSubmit1}
                  handleUpload={handleUpload}
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                  setDetailsData={setDetailsData}
                  customStyles={customStyles}
                  subjectOptions={subjectOptions}
                  setSubjectData={setSubjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 20 ? (
                <></>
              ) : stapeThree === 3 ? (
                <StepThree
                  commonSubmit3={commonSubmit3}
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              ) : stapeFour === 4 ? (
                <StepFour
                  commonSubmit4={commonSubmit4}
                  handleRadioChange={handleRadioChange}
                  selectedOption={selectedOption}
                />
              ) : stapeFive === 5 ? (
                <StepFive
                  pageType={location.state?.data}
                  commonSubmit5={commonSubmit5}
                  selectedOptionRef={selectedOptionRef}
                  handleRadioChangeRef={handleRadioChangeRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  getRangeDate={getRangeDate}
                  handleRangeChange={handleRangeChange}
                  questionCount={questionCount}
                />
              ) : stapeSix === 6 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
              ) : stapeStart === 2 ? (
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <StepSeven
                  pageType={location.state?.data}
                  subjectData={subjectData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  handleShow={handleShow}
                  getRangeDate={getRangeDate}
                  questionCount={questionCount}
                  showModal={showModal}
                  handleEditSave={handleEditSave}
                  setSelectedDate={setSelectedDate}
                  setSelectedTime={setSelectedTime}
                  handleClose={handleClose}
                  selectedOption={selectedOption}
                  selectedOptionRef={selectedOptionRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                />
              )}
            </>
          ) : (
            <>
              {/* ? STEP THREE */}
              {stapeStart === 1 ? (
                <StepOne
                  setStapeStart={setStapeStart}
                  commonSubmit1={commonSubmit1}
                  handleUpload={handleUpload}
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                  setDetailsData={setDetailsData}
                  customStyles={customStyles}
                  subjectOptions={subjectOptions}
                  setSubjectData={setSubjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 20 ? (
                ""
              ) : stapeThree === 3 ? (
                <StepThree
                  commonSubmit3={commonSubmit3}
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              ) : stapeFour === 4 ? (
                <StepFour
                  commonSubmit4={commonSubmit4}
                  handleRadioChange={handleRadioChange}
                  selectedOption={selectedOption}
                />
              ) : stapeFive === 5 ? (
                <StepFive
                  commonSubmit5={commonSubmit5}
                  selectedOptionRef={selectedOptionRef}
                  handleRadioChangeRef={handleRadioChangeRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
              ) : stapeSix === 6 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
              ) : stapeStart === 2 ? (
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <StepSeven
                  pageType={location.state?.data}
                  subjectData={subjectData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  handleShow={handleShow}
                  getRangeDate={getRangeDate}
                  questionCount={questionCount}
                  showModal={showModal}
                  handleEditSave={handleEditSave}
                  setSelectedDate={setSelectedDate}
                  setSelectedTime={setSelectedTime}
                  handleClose={handleClose}
                  selectedOption={selectedOption}
                  selectedOptionRef={selectedOptionRef}
                  wordsCount={wordsCount}
                  pageNumber={pageNumber}
                />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderNew;
