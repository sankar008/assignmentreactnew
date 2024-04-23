import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { File } from "react-feather";
import * as API from "../api/index";
const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const orderListData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_order_byId(
        localStorage.getItem("_userId"),
        header
      );
      setOrderData(response.data.data);
      console.log("response", response);
    } catch (error) {}
  };

  useEffect(() => {
    orderListData();
  }, []);

  return (
    <div>
      <table class="table table-striped-columns table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subject</th>
            <th scope="col">Details</th>
            <th scope="col">File</th>
          </tr>
        </thead>
        <tbody>
          {/* {orderData.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.subject}</td>
              <td>{item.details}</td>
              <td>{item.file ? <File /> : ""}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
