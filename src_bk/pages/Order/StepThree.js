import React from "react";

const StepThree = ({
  commonSubmit3,
  currentDate,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="order_header"></div>
          <h3 className="order_header_titel">Date & Time</h3>
        </div>
      </div>
      <div className="row justify-content-center mb-5 ">
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
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="row col-lg-12">
        <div className="step_buttn">
          <button className="continue_btn" onClick={commonSubmit3}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
