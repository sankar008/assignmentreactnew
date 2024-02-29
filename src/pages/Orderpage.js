import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import OrderFrom from "../components/OrderFrom";
import '../App.css'
import OtpInput from 'react-otp-input';
import * as API from "../api/index";
import moment from "moment-timezone";
import dateFormat, { masks } from "dateformat";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import MultipleFileUploader from "./MultipleFileUploader";
import MyModal from "./MyModal";
import { MESSAGE } from "../helpers/commonData";

let datepick ='';
let timepix ='';
const currentDate = new Date().toISOString().split('T')[0];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    marginBottom: '30px',
    position: 'relative',
    marginTop: '20px',
  }),
  input: (provided) => ({
    ...provided,
    height: '42px',
    borderRadius: '6px',
    // border: '1px solid #ddd',
    width: '100%',
    paddingLeft: '14px',
    /* color: '#ddd', */
  }),
};

const Orderpage = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  const [detailsData, setDetailsData] = useState("");
  const [imageData, setImageData] = useState("");
  const [subjectData, setSubjectData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [finalOrderPage, setFinalOrderPage] = useState("hide");
  const [otp, setOtp] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSpaingValue, setSelectedSpaingValue] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

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

  console.log('selectedFiles=================>>>>>>>>>>>', selectedFiles);

  // selected Option
  const subjectOptions = [
    { value: 'math', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English' },
    { value: 'history', label: 'History' },
    { value: 'programming', label: 'Programming' },
    { value: 'art', label: 'Art' },
    { value: 'music', label: 'Music' },
    { value: 'physical_education', label: 'Physical Education' },
    { value: 'foreign_language', label: 'Foreign Language' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'literature', label: 'Literature' },
    { value: 'geography', label: 'Geography' },
    { value: 'computer_science', label: 'Computer Science' },
    { value: 'economics', label: 'Economics' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'sociology', label: 'Sociology' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'physical_science', label: 'Physical Science' },
    { value: 'political_science', label: 'Political Science' },
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
    setSubjectData(selectedOption)
  };


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRadioChangeForSpaing = (event) => {
    setSelectedSpaingValue(event.target.value);
  };


  console.log('selectedOption>>>>>>>>>>>>>>>>>..', selectedOption)
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

  console.log('getRangeDate', getRangeDate)
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
  console.log()
  const imageUploading = (e) => {
    let images = e.target.files[0];
    console.log('images', images)

    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };


  useMemo(() => {
    if (detailsData === '') {
      setShowSignUpSection1(false)

    }
    if (subjectData === '') {
      setShowSignUpSection1(false)

    }
  }, [detailsData, subjectData, selectedFiles]);



  const commonSubmit1 = () => {
    if (detailsData !== '' && subjectData !== '' && selectedFiles !== '') {
      setShowSignUpSection(false)
      setShowSignUpSection1(true)
    } else {
      setShowSignUpSection(true)
      setShowSignUpSection1(false)
    }
  };

  const commonSubmit2 = () => {
    if (emailData !== '') {
      setShowSignUpSection1(false)
      setShowSignUpSection3(true)
    } else {
      setShowSignUpSection1(true)
      setShowSignUpSection3(false)
    }
  };

  const commonSubmit3 = () => {
    if (selectedSubject !== '') {
      setShowSignUpSection2(false)
      setShowSignUpSection3(true)
    } else {
      setShowSignUpSection2(true)
      setShowSignUpSection3(false)
    }
  };


  const educationLabel = () => {
    if (selectedOption !== '') {
      setShowSignUpSection3(false)
      setShowSignUpSection4(true)
    } else {
      setShowSignUpSection3(true)
      setShowSignUpSection4(false)
    }
  }
  const setionthreeDateandTime = () => {
    if (selectedDate !== '' || selectedTime !== '') {
      setShowSignUpSection4(false)
      setShowSignUpSection6(true)
    } else {
      setShowSignUpSection4(true)
      setShowSignUpSection6(false)
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const dataSubmit = async (e) => {
    e.preventDefault()
    const header = localStorage.getItem("_tokenCode");
    try {
      if (location.state?.data === 1) {
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData?.label,
          emailId: emailData,
          image: selectedFiles.map((p) => {
            return p.preview
          }),//imageData,
          //education: selectedSubject,
          education: "test",
          date: selectedDate,
          time: selectedTime,
          wordsCount: 120,
          duration: getRangeDate,
        }
        const response = await API.user_assignment(reqObj, header);
        if (response?.data?.success === 1) {
          console.log(response)
          setID(response?.data?.data?.id)
          setShowSignUpSection6(false)
          setShowSignUpSection7(true)
        } else {
          setShowSignUpSection6(true)
          setShowSignUpSection7(false)
        }
      }

      if (location.state?.data === 2) {
        const reqObj = {
          type: location.state.data,
          details: detailsData,
          subject: subjectData?.label,
          emailId: emailData,
          image: selectedFiles.map((p) => {
            return p.preview
          }),
          // education: selectedSubject,
          education: "abc",
          date: selectedDate,
          time: selectedTime,
          wordsCount: 120,
          duration: getRangeDate,
        }
        const response = await API.user_assignment(reqObj, header);
        console.log('response==================', response)
        if (response?.data?.success === 1) {
          console.log(response)
          setID(response?.data?.data?.id)

          setShowSignUpSection6(false)
          setShowSignUpSection7(true)
        } else {
          setShowSignUpSection6(true)
          setShowSignUpSection7(false)
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
            return p.preview
          }),
          education: "test",
          date: selectedDate,
          time: selectedTime,
          wordsCount: wordsCount,
          duration: getRangeDate,
          spacing: showSignUpSectionRadio
        }
        const response = await API.user_assignment(reqObj, header);
        console.log('response==================', response)
        if (response?.data?.success === 1) {
          console.log(response)
          setID(response?.data?.data?._id)

          setShowSignUpSection6(false)
          setShowSignUpSection7(true)
        } else {
          setShowSignUpSection6(true)
          setShowSignUpSection7(false)
        }
      }
    } catch (error) { }
  }

  useEffect(() => {
    // Get the current date in the format YYYY-MM-DD
    const currentDate2 = new Date().toISOString().split('T')[0];
    const currettime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }).slice(0, 5);

// console.log('Current time in India:', currentTime);
//     const currettime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).slice(11, 16);


    // Set the current date as the default value
    setSelectedTime(currettime);
    setSelectedDate(currentDate2);
  }, []);


  const SubmitOTP = async (e) => {
    e.preventDefault()
    const header = localStorage.getItem("_tokenCode");
    try {
        const reqObj = {
            emailId: emailData,
            otp: otp
        }

        const response = await API.verification_otp(reqObj, header);
        console.log('SubmitOTP----------------response', response)

        const sortTblElements = document.getElementById('paymentpt');
        const sortTblElements1 = document.getElementById('paymentpt1');
        const sortTblElements2 = document.getElementById('paymentpt2');

        // const signUpOtpElements = document.getElementsByClassName('sign_uplft_otp');
        const signUpOtpElements = document.getElementById('singotp');
        const signUpOtpElements2 = document.getElementById('singotp2');
        const signUpOtpElements3 = document.getElementById('singotp3');
        



        if (response.data.success === 1) {

          // MESSAGE(response.data.message, 1);
          
            // Assuming there is only one element with class 'sort_tbl'
            if (sortTblElements) {
                sortTblElements.style.display = 'block';
            }
            if (sortTblElements1) {
              sortTblElements1.style.display = 'block';
          }
          if (sortTblElements2) {
            sortTblElements2.style.display = 'block';
        }
            if (signUpOtpElements) {
                signUpOtpElements.style.display = 'none';
            }
            if (signUpOtpElements2) {
              signUpOtpElements2.style.display = 'none';
          }
          if (signUpOtpElements3) {
            signUpOtpElements3.style.display = 'none';
        }

          MESSAGE(response.data.message, 1);

        } else if (response.data.success === 0) {

            if (sortTblElements) {
                sortTblElements.style.display = 'none';
            }
            if (sortTblElements1) {
              sortTblElements1.style.display = 'none';
          }
          if (sortTblElements2) {
            sortTblElements2.style.display = 'none';
        }
            
            if (signUpOtpElements) {
                signUpOtpElements.style.display = 'block';
            }
            if (signUpOtpElements2) {
              signUpOtpElements2.style.display = 'block';
          }
          if (signUpOtpElements3) {
            signUpOtpElements3.style.display = 'block';
        }
            
            alert('Enter the correct OTP');
        } else{

          if (sortTblElements) {
            sortTblElements.style.display = 'none';
        }
        if (sortTblElements1) {
          sortTblElements1.style.display = 'none';
      }
      if (sortTblElements2) {
        sortTblElements2.style.display = 'none';
    }
        
        if (signUpOtpElements) {
            signUpOtpElements.style.display = 'block';
        }
        if (signUpOtpElements2) {
          signUpOtpElements2.style.display = 'block';
      }
      if (signUpOtpElements3) {
        signUpOtpElements3.style.display = 'block';
    }

        }
        setFinalOrderPage("");
    } catch (error) { }
}


console.log('id================>', id)
  useMemo(() => {
    if (selectedDate !== '') {
      const dateDate = dateFormat(selectedDate, "mmmm dS, h:MM:ss TT");
    } else {
      return false
    }
  }, [selectedDate]);

  const visibaleSection6 = () => {

    if (selectedDate !== '' && selectedTime !== '') {
      setShowSignUpSection3(false)
      setShowSignUpSection6(true)
    } else {
      setShowSignUpSection3(true)
      setShowSignUpSection6(false)
    }
  }


  const visibaleSection7 = () => {
    if (getRangeDate !== '') {
      setshowSignUpSectionRadio(true)
    } else {
      setshowSignUpSectionRadio(false)

    }
  }


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
    setShowSignUpSection3(true)
  }





  const handleUpload = (selectedImages) => {
    // Do something with the selected images (e.g., send to the server)
    console.log(selectedImages);
  };

  const handleEditSave = async (e) => {
    e.preventDefault()
    const header = localStorage.getItem("_tokenCode");


   datepick = selectedDate;
 timepix = selectedTime;

    try {
      const reqObj = {
        date: selectedDate,
        time: selectedTime,
        id: id
      }


      const response = await API.EDIT_DATE_TIME(reqObj, header);

      console.log("hello",response);
    } catch (error) { }
  }


  return (
    <div>
      <section className="Order_section">
        <div className="container">
          {location?.state?.data === 1 ? (
            <>
              <div className={`row justify-content-center ${showSignUpSection === true ? '' : 'hide'}`}>

                <div className="col-lg-12">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Post Questions</h3>
                </div>

                <div className="col-md-6">
                  <div className="file-uploader-wrapper">
                    <MultipleFileUploader maxFileCount={3} onUpload={handleUpload} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
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

              <div className={`row mt-5  ${showSignUpSection1 === false ? 'hide' : ''}`}>
                <div className="col-lg-6">
                  <div className="sign_uplft">
                    <h4>
                      Enter <span className="theme_color">Email</span> or{" "}
                      <span className="theme_color">Phone</span> to <br />{" "}
                      <span>Sign Up/Sigh In</span>
                    </h4>
                    <div className="sign_up_field">
                      <input
                        type="text"
                        id="signUp"
                        placeholder="john@gmail.com"
                        onChange={(e) => setEmailData(e.target.value)}
                      ></input>
                      <div className="sign_icon">
                        <img src="./images/email.png"></img>
                      </div>
                    </div>



                    <div className="grup_btn">
                      <button onClick={commonSubmit2} className="btn_one">
                        Continue
                      </button>
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

              <div className={`row justify-content-center  ${showSignUpSection3 === false ? 'hide' : 'block'}`}>

                <div className="col-lg-12">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Date & Time</h3>
                </div>
              </div>

              <div className={`row justify-content-center mb-5  ${showSignUpSection3 === false ? 'hide' : ''}`}>

                <div className="col-lg-3">
                  <div className="timePicer">
                    <span>Select Date</span>
                    <br />
                    <img src="./images/calendar.png"></img> <br />
                    <input
                      type="date"
                      id="date_picker"
                      // placeholder="01/01/2023"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={currentDate} 
                    ></input>
                    {/* {moment(tableData[0].createdAt).format(
                                      "MMMM Do YYYY"
                                    )} */}
                  </div> 
                </div>

                <div className="col-lg-3">
                  <div className="timePicer">
                    <span>Select Time</span> <br />
                    <img src="./images/chronometer.png"></img> <br />
                    <input
                      type="time"
                      id="time_picker"
                      // placeholder="00:00:00"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}


                    ></input>
                  </div>
                </div>
              </div>

              <div className={`row col-lg-12   ${showSignUpSection3 === false ? 'hide' : ''}`}>
                <div className="step_buttn">
                  <button className="continue_btn" onClick={visibaleSection6}>
                    Continue
                  </button>
                </div>
              </div>
              {/* /hide */}

              <div className={`row justify-content-center mt-5 ${showSignUpSection6 === false ? 'hide' : ''}`}>
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Duration</h3>
                </div>

                <div className="col-md-7">
                  <div className="rang_toper">
                    <div className="icon_with_timer">
                      <img src="./images/stopwatch.png" alt="stopwatch" />
                      <span>
                        <strong>{getRangeDate}</strong> Min
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

                <div className="col-md-7">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">words Count</h3>
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

                <div className="col-lg-12">
                  <div className="step_buttn">
                    <button className="continue_btn" onClick={dataSubmit}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>




              <div className={`row mt-5  ${showSignUpSection7 === false ? 'hide' : ''}`} id="singotp">
                <div className="col-lg-6">
                  <div className="sign_uplft_otp">
                    <h4>
                      Enter <span className="theme_color">OTP</span> {" "} <br />
                      <span>Put your OTP Here</span>
                    </h4>


                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      isInputNum
                      containerStyle="otp-input-container"
                      inputStyle="otp-input"
                      renderInput={(props) => <input {...props} />}
                    />






                    <div className="grup_btn">
                      <button onClick={(e) => SubmitOTP(e)} className="btn_one">
                        Continue
                      </button>

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




              {/* <div className= {`row justify-content-center mt-5 ${showSignUpSection7 === false ? 'hide' : 'block'}`}> */}
              <div className={`row items-center justify-content-center mt-5 ${finalOrderPage}`} >

                <div className="col-lg-6" id="paymentpt1">
                  <div className="sort_tbl">
                    <div className="flext_liner">
                      {/* <strong>Order Review</strong>
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
                      </button> */}
                    </div>
                    <div className="flext_liner">
                      <span>Subject</span>
                      <span className="sub_fw600">{subjectData?.label}</span>
                    </div>

                    <div className="flext_liner">
                      <span>Service Type</span>
                      <span className="sub_fw600">Session</span>
                    </div>

                    <div className="flext_liner">
                      <span>Start Time</span>
                      <span className="sub_fw600">{selectedDate}

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
                      <span>Duration</span>
                      <span className="sub_fw600">{getRangeDate} Min</span>
                    </div>
                    <div className="flext_liner ex_border">
                      <span>No of Question</span>
                      <span className="sub_fw600">{questionCount}</span>
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
          ) :
            location.state?.data === 2 ? (
              <>

                <div className={`row justify-content-center ${showSignUpSection === true ? '' : 'hide'}`}>
                  <div className="col-lg-12">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Post Questions</h3>
                  </div>

                  <div className="col-md-6">
                    <div className="file-uploader-wrapper">
                      <MultipleFileUploader maxFileCount={3} onUpload={handleUpload} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
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

                <div className={`row mt-5  ${showSignUpSection1 === false ? 'hide' : ''}`}>
                  <div className="col-lg-6">
                    <div className="sign_uplft">
                      <h4>
                        Enter <span className="theme_color">Email</span> or{" "}
                        <span className="theme_color">Phone</span> to <br />{" "}
                        <span>Sign Up/Sigh In</span>
                      </h4>
                      <div className="sign_up_field">
                        <input
                          type="text"
                          id="signUp"
                          placeholder="john@gmail.com"
                          onChange={(e) => setEmailData(e.target.value)}
                        ></input>
                        <div className="sign_icon">
                          <img src="./images/email.png"></img>
                        </div>
                      </div>



                      <div className="grup_btn">
                        <button onClick={commonSubmit2} className="btn_one">
                          Continue
                        </button>
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

                <div className={`row justify-content-center  ${showSignUpSection2 === false ? 'hide' : ''}`}>
                  <div className="col-lg-12">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Subject</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="big_sercbar">
                      <select class="form-select form_select_icons"
                        aria-label="Default select example"
                        value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <div className="src_icons">
                        <img src="./images/loupe.png"></img>
                      </div>
                      <div className="step_buttn">
                        <button onClick={commonSubmit3} className="continue_btn" >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`row justify-content-center  ${showSignUpSection3 === false ? 'hide' : 'block'}`}>

                  <div className="col-lg-12">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Date & Time</h3>
                  </div>
                </div>

                <div className={`row justify-content-center mb-5  ${showSignUpSection3 === false ? 'hide' : ''}`}>

                  <div className="col-lg-3">
                    <div className="timePicer">
                      <span>Select Date</span>
                      <br />
                      <img src="./images/calendar.png"></img> <br />
                      <input
                        type="date"
                        id="date_picker"
                        // placeholder="01/01/2023"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={currentDate} 
                      ></input>
                      {/* {moment(tableData[0].createdAt).format(
                      "MMMM Do YYYY"
                    )} */}
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="timePicer">
                      <span>Select Time</span> <br />
                      <img src="./images/chronometer.png"></img> <br />
                      <input
                        type="time"
                        id="time_picker"
                        // placeholder="00:00:00"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}


                      ></input>
                    </div>
                  </div>
                </div>
                <div className={`row col-lg-12   ${showSignUpSection3 === false ? 'hide' : ''}`}>
                  <div className="step_buttn">
                    <button className="continue_btn" onClick={visibaleSection6}>
                      Continue
                    </button>
                  </div>
                </div>
                {/* hide */}
                <div className={`row justify-content-center mt-5 ${showSignUpSection6 === false ? 'hide' : ''}`}>
                <div className="col-lg-8">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">Duration</h3>
                </div>

                <div className="col-md-7">
                  <div className="rang_toper">
                    <div className="icon_with_timer">
                      <img src="./images/stopwatch.png" alt="stopwatch" />
                      <span>
                        <strong>{getRangeDate}</strong> Min
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

                <div className="col-md-7">
                  <div className="order_header"></div>
                  <h3 className="order_header_titel">words Count</h3>
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

                <div className="col-lg-12">
                  <div className="step_buttn">
                    <button className="continue_btn" onClick={dataSubmit}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>




                <div className={`row justify-content-center mt-5 ${showSignUpSection7 === false ? 'hide' : ''}`} id="singotp2" >
                  <div className="col-lg-6">
                    <div className="sign_uplft_otp">
                      <h4>
                        Enter <span className="theme_color">OTP</span> {" "} <br />
                        <span>Put your OTP Here</span>
                      </h4>


                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        isInputNum
                        containerStyle="otp-input-container"
                        inputStyle="otp-input"
                        renderInput={(props) => <input {...props} />}
                      />






                      <div className="grup_btn">
                        <button onClick={(e) => SubmitOTP(e)} className="btn_one">
                          Continue
                        </button>

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


                <div className={`row items-center justify-content-center mt-5 ${finalOrderPage}`} >

                  <div className="col-lg-6" id="paymentpt2">
                    <div className="sort_tbl">
                      <div className="flext_liner">
                        {/* <strong>Order Review</strong>
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
                        </button> */}
                      </div>
                      <div className="flext_liner">
                        <span>Subject</span>
                        <span className="sub_fw600">{subjectData?.label}</span>
                      </div>

                      <div className="flext_liner">
                        <span>Service Type</span>
                        <span className="sub_fw600">Session</span>
                      </div>

                      <div className="flext_liner">
                        <span>Start Time</span>
                        <span className="sub_fw600">{selectedDate}

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
                        <span>Duration</span>
                        <span className="sub_fw600">{getRangeDate} Min</span>
                      </div>
                      <div className="flext_liner ex_border">
                        <span>No of Question</span>
                        <span className="sub_fw600">{questionCount}</span>
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


                <div className={`row justify-content-center ${showSignUpSection === true ? '' : 'hide'}`}>
                  <div className="col-lg-12">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Post Questions</h3>
                  </div>

                  <div className="col-md-6">
                    <div className="file-uploader-wrapper">
                      <MultipleFileUploader maxFileCount={3} onUpload={handleUpload} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
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

                <div className={`row mt-5  ${showSignUpSection1 === false ? 'hide' : ''}`}>
                  <div className="col-lg-6">
                    <div className="sign_uplft">
                      <h4>
                        Enter <span className="theme_color">Email</span> or{" "}
                        <span className="theme_color">Phone</span> to <br />{" "}
                        <span>Sign Up/Sigh In</span>
                      </h4>
                      <div className="sign_up_field">
                        <input
                          type="text"
                          id="signUp"
                          placeholder="john@gmail.com"
                          onChange={(e) => setEmailData(e.target.value)}
                        ></input>
                        <div className="sign_icon">
                          <img src="./images/email.png"></img>
                        </div>
                      </div>



                      <div className="grup_btn">
                        <button onClick={commonSubmit2} className="btn_one">
                          Continue
                        </button>
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

                <div className={`row justify-content-center mt-5  ${showSignUpSection3 === false ? 'hide' : ''}`}>

                  <div className="col-lg-8">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Education Lavel</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row justify-content-center">


                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'Freshman' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="academicYear"
                              value="Freshman"
                              checked={selectedOption === 'Freshman'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"
                            />
                            Freshman
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'Pre Final' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="academicYear"
                              value="Pre Final"
                              checked={selectedOption === 'Pre Final'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"

                            />
                            Pre Final
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'Final Year' ? 'selected' : ''}`}>

                            <input
                              type="radio"
                              name="academicYear"
                              value="Final Year"
                              checked={selectedOption === 'Final Year'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"

                            />
                            Final Year
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'Masters' ? 'selected' : ''}`}>


                            <input
                              type="radio"
                              name="academicYear"
                              value="Masters"
                              checked={selectedOption === 'Masters'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"

                            />
                            Masters
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'PHD' ? 'selected' : ''}`}>


                            <input
                              type="radio"
                              name="academicYear"
                              value="PHD"
                              checked={selectedOption === 'PHD'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"

                            />
                            PHD
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="all_button_group">
                          <label className={`radioButtonLabel ${selectedOption === 'Another PHD' ? 'selected' : ''}`}>


                            <input
                              type="radio"
                              name="academicYear"
                              value="Another PHD"
                              checked={selectedOption === 'Another PHD'}
                              onChange={handleRadioChange}
                              className="hiddenRadioInput"

                            />
                            Another PHD
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="step_buttn" onClick={educationLabel}>
                          <button class="continue_btn">Continue</button>
                        </div>
                        {/* <button onClick={commonSubmit3} className="step_buttn" >
                          Continue
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>



                <div className={`row justify-content-center  ${showSignUpSection4 === false ? 'hide' : 'block'}`}>

                  <div className="col-lg-12">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Date & Time</h3>
                  </div>
                </div>

                <div className={`row justify-content-center mb-5  ${showSignUpSection4 === false ? 'hide' : ''}`}>

                  <div className="col-lg-3">
                    <div className="timePicer">
                      <span>Select Date</span>
                      <br />
                      <img src="./images/calendar.png"></img> <br />
                      <input
                        type="date"
                        id="date_picker"
                        // placeholder="01/01/2023"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={currentDate} 
                      ></input>
                      {/* {moment(tableData[0].createdAt).format(
                      "MMMM Do YYYY"
                    )} */}
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="timePicer">
                      <span>Select Time</span> <br />
                      <img src="./images/chronometer.png"></img> <br />
                      <input
                        type="time"
                        id="time_picker"
                        // placeholder="00:00:00"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}


                      ></input>
                    </div>
                  </div>
                </div>
                <div className={`row col-lg-12   ${showSignUpSection4 === false ? 'hide' : ''}`}>
                  <div className="step_buttn">
                    <button className="continue_btn" onClick={setionthreeDateandTime}>
                      Continue
                    </button>
                  </div>
                </div>



                <div className={`row justify-content-center mt-5 ${showSignUpSection6 === false ? 'hide' : ''}`}>

                  <div className="col-md-8">
                    <div className="border_radio">
                      <span>
                        <strong>Spaing: </strong>{" "}
                      </span>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked={selectedSpaingValue === 'option1'}
                          onChange={handleRadioChangeForSpaing}

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
                          checked={selectedSpaingValue === 'option2'}
                          onChange={handleRadioChangeForSpaing}

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
                          checked={selectedSpaingValue === 'option3'}
                          onChange={handleRadioChangeForSpaing}

                        ></input>
                        <label class="form-check-label" for="exampleRadios3">
                          All
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="step_buttn" onClick={(e) => dataSubmit(e)}>
                      <button class="continue_btn">Continue</button>
                    </div>
                  </div>
                </div>

                <div className={`row justify-content-center mt-5 ${showSignUpSection7 === false ? 'hide' : ''}`} id="singotp3">
                  <div className="col-lg-6">
                    <div className="sign_uplft_otp">
                      <h4>
                        Enter <span className="theme_color">OTP</span> {" "} <br />
                        <span>Put your OTP Here</span>
                      </h4>


                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        isInputNum
                        containerStyle="otp-input-container"
                        inputStyle="otp-input"
                        renderInput={(props) => <input {...props} />}
                      />






                      <div className="grup_btn">
                        <button onClick={(e) => SubmitOTP(e)} className="btn_one">
                          Continue
                        </button>

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

                <div className={`row items-center justify-content-center mt-5 ${finalOrderPage}`} >

                  <div className="col-lg-6" id="paymentpt">
                    <div className="sort_tbl">
                      <div className="flext_liner">
                        {/* <strong>Order Review</strong>
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
                        </button> */}
                      </div>
                      <div className="flext_liner">
                        <span>Subject</span>
                        <span className="sub_fw600">{subjectData?.label}</span>
                      </div>

                      <div className="flext_liner">
                        <span>Service Type</span>
                        <span className="sub_fw600">Session</span>
                      </div>

                      <div className="flext_liner">
                        <span>Start Time</span>
                        <span className="sub_fw600">{selectedDate}

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
                        <span>Duration</span>
                        <span className="sub_fw600">{getRangeDate} Min</span>
                      </div>
                      <div className="flext_liner ex_border">
                        <span>No of Question</span>
                        <span className="sub_fw600">{questionCount}</span>
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
      <MyModal showModal={showModal} handleClose={handleClose} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} handleEditSave={handleEditSave} selectedDate ={selectedDate} selectedTime={selectedTime}  />

    </div>
  );
};

// export { datepick, timepix, Orderpage }
// export const dates = { selectedDate }
// export const times = { selectedTime }


export default Orderpage;
