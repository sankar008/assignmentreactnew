import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import OrderFrom from "../components/OrderFrom";
import "../App.css";
import OtpInput from "react-otp-input";
import * as API from "../api/index";
import moment from "moment-timezone";
import dateFormat, { masks } from "dateformat";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import MultipleFileUploader from "./MultipleFileUploader";
import MyModal from "./MyModal";
import { MESSAGE } from "../helpers/commonData";

import StepOne from "./Order/StepOne";
import StepTwo from "./Order/StepTwo";
import StepThree from "./Order/StepThree";
import StepFour from "./Order/StepFour";
import StepFive from "./Order/StepFive";
import StepSixe from "./Order/StepSixe";
import StepSeven from "./Order/StepSeven";
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

  const commonSubmit1 = () => {
    if (detailsData !== "" && subjectData !== "" && selectedFiles !== "") {
      setStapeStart(2);
    }
  };
  const commonSubmit2 = () => {
    if (emailData !== "") {
      setStapeStart("");
      setStapeThree(3);
    }
  };

  const commonSubmit3 = () => {
    setStapeThree("");
    setStapeFour(4);
  };

  const commonSubmit4 = () => {
    if (selectedOption === null) {
      console.log("Error");
    } else {
      setStapeFour("");
      setStapeFive(5);
    }
  };
  const commonSubmit5 = async () => {
    console.log("getRangeDate");
    setStapeFive("");
    setStapeSix(6);
    if (selectedOptionRef === null) {
    } else {
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
            education: selectedSubject,
            date: selectedDate,
            time: selectedTime,
            wordsCount: pageNumber,
            duration: getRangeDate,
          };
          const response = await API.user_assignment(reqObj, header);
          console.log("responseType1", response);
          if (response?.data?.success === 1) {
            setStapeFive("");
            setStapeSix(6);
          } else {
            setStapeFive("");
            setStapeSix(6);
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
      } catch (error) {}
    }
  };

  const commonSubmit6 = async () => {
    setStapeSix("");
    setStapeSeven(7);
    const header = localStorage.getItem("_tokenCode");
    if (otp) {
      try {
        const reqObj = {
          emailId: emailData,
          otp: otp,
        };
        const response = await API.verification_otp(reqObj, header);
        console.log("SubmitOTPresponse", response);
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

  console.log("detailsData", detailsData);

  //duration function and state

  const [getRangeDate, setGetRangeDate] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setGetRangeDate(value);

    // Calculate the question count based on the selected duration
    const additionalQuestions = Math.floor(value / 15) * 2;
    setQuestionCount(additionalQuestions);
  };
  // -------------

  // selected Option
  const subjectOptions = [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "history", label: "History" },
    { value: "programming", label: "Programming" },
    { value: "art", label: "Art" },
    { value: "music", label: "Music" },
    { value: "physical_education", label: "Physical Education" },
    { value: "foreign_language", label: "Foreign Language" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "literature", label: "Literature" },
    { value: "geography", label: "Geography" },
    { value: "computer_science", label: "Computer Science" },
    { value: "economics", label: "Economics" },
    { value: "psychology", label: "Psychology" },
    { value: "sociology", label: "Sociology" },
    { value: "philosophy", label: "Philosophy" },
    { value: "physical_science", label: "Physical Science" },
    { value: "political_science", label: "Political Science" },
  ];

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    try {
      const reqObj = {
        date: selectedDate,
        time: selectedTime,
        id: id,
      };

      const response = await API.EDIT_DATE_TIME(reqObj, header);

      console.log("hello", response);
    } catch (error) {}
  };
  return (
    <>
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
                  subjectData={subjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 2 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
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
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <StepSeven />
              )}
            </>
          ) : location.state?.data === 2 ? (
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
                  subjectData={subjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 2 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
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
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <StepSeven />
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
                  subjectData={subjectData}
                  handleChange={handleChange}
                />
              ) : stapeStart === 2 ? (
                <StepTwo
                  commonSubmit2={commonSubmit2}
                  setEmailData={setEmailData}
                />
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
                <StepSixe
                  emailData={emailData}
                  commonSubmit6={commonSubmit6}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <StepSeven />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderNew;
