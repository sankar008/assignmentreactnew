import React, { useState } from "react";
import * as API from "../../Api/index";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Select from "react-select";
import moment from "moment-timezone";
import { MESSAGE } from "../../../helpers/commonData";
const AssignMentsDetails = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const location = useLocation();
  const [tableData, setTableData] = useState([]);
  const [expert, setExpert] = useState([]);
  const [expertId, setExpertId] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  console.log("selectedOption", selectedOption);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.assignmentByid(location.state.dataId, header);
      const eresponse = await API.all_teacher(header);
      const transformedArray = eresponse?.data?.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      console.log("eresponse", eresponse);

      setExpert(transformedArray);
      setTableData(response.data.data);
      console.log("response", response);
    } catch (error) {}
  };

  const submitHandeler = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        assignmentId: location.state.dataId,
        teacherId: expertId,
      };
      console.log("reqObj", reqObj);
      // const response = await API.jobAssing(reqObj, header);
      // console.log("response", response);
      // if (response.data.success === 1) {
      //   MESSAGE(response.data.data, 1);
      // }
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
        <div className="">
          <label>Assign expert</label>
          <Select
            isMulti
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={expert}
          />
          {/* <select
            onChange={(e) => setExpertId(e.target.value)}
            className="form-control w-50"
          >
            <option>--- Select Expert ---</option>
            {expert.map((item, index) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select> */}
        </div>
        <div class="assignment-status">
          <span class="status-label">Status:</span>
          <span class="status-value btn icon btn-primary">Not Submitted</span>
        </div>
        <button onClick={submitHandeler} class="submit-button">
          Submit Assignment
        </button>
      </div>
    </>
  );
};

export default AssignMentsDetails;
