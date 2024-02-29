import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import { datepick, timepix, Orderpage } from './Orderpage';

const MyModal = ({ showModal, handleClose , setSelectedDate,setSelectedTime, handleEditSave, selectedDate, selectedTime}) => {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Date And Time</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`row justify-content-center mb-5`}>

          <div className="col-lg-6">
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

          <div className="col-lg-6">
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
        </div>      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
        <Button variant="primary" onClick={handleEditSave}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
