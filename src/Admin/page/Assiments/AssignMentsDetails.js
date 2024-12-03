import React, { useState } from "react";
import * as API from "../../Api/index";
import { useEffect } from "react";
import { useLocation } from "react-router";
import moment from "moment-timezone";
const AssignMentsDetails = () => {
  const location = useLocation();
  const [tableData, setTableData] = useState([]);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.assignmentByid(location.state.dataId, header);
      setTableData(response.data.data);
      console.log("response", response);
    } catch (error) {}
  };

  useEffect(() => {
    getdetailsData();
  }, []);
  return (
    <>
      <div class="assignment-card">
        <div class="assignment-header">
          <h1 class="assignment-title">{tableData?.student?.emailId}</h1>
          <span class="assignment-due-date">
            Date: {moment(tableData.date).format("DD/MM/YYYY")}
          </span>
        </div>
        <div className="list-container">
          <ul className="p-0">
            <li>
              <strong>Education : </strong> {tableData?.education}
            </li>
            <li>
              <strong>Subject : </strong>
              {tableData?.subject}
            </li>
            <li>
              <strong>Words Count : </strong>
              {tableData?.wordsCount}
            </li>
            <li>
              <strong>Assignment Type : </strong>
              {tableData?.type === "1"
                ? "Homework / Assignment"
                : tableData?.type === "2"
                ? "Schedule 1 to 1 Session"
                : tableData?.type === "3"
                ? "Essay Writing"
                : ""}
            </li>
          </ul>
        </div>
        <div class="assignment-description">
          <p>{tableData?.details}</p>
        </div>
        <div class="assignment-status">
          <span class="status-label">Status:</span>
          <span class="status-value btn icon btn-primary">Not Submitted</span>
        </div>
        <button class="submit-button">Submit Assignment</button>
      </div>
    </>
  );
};

export default AssignMentsDetails;
