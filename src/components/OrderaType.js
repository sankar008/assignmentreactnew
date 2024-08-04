import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/images/homework.png";
import deadline from "../assets/images/deadline.png";
import writing from "../assets/images/writing.png";
const OrderaType = () => {
  return (
    <>
      <div className="Order_section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-12 col-md-12">
            <Link to="/orders" state={{ data: 1 }}>
              <div className="order__firststp">
                <img src={homeimg}></img>
                <div className="content">
                  <h5>Homework / Assignment</h5>
                  <p>(Post Question, Lab Work, Project)</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-12 col-md-12">
            <Link to="/orders" state={{ data: 2 }}>
              <div className="order__firststp">
                <img src={deadline}></img>
                <div className="content">
                  <h5>Schedule 1 to 1 Session</h5>
                  <p>(Get Instant Solution)</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-12 col-md-12">
            <Link to="/orders" state={{ data: 3 }}>
              <div className="order__firststp">
                <div className="inco_effct">
                  <img src={writing}></img>
                </div>

                <div className="content">
                  {" "}
                  <h5>Essay Writing</h5>
                  <p>(Customised Essay Help)</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderaType;
