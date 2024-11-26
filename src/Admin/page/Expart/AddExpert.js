import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as API from "../../Api/index";
import { async } from "react-input-emoji";
import { MESSAGE } from "../../../helpers/commonData";
import { IMG } from "../../Api/constant";
import { Edit } from "react-feather";
const initialData = {
  name: "",
  emailId: "",
  mobileNo: "",
  address: "",
  qualification: "",
};

const AddExpert = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(initialData);
  const [tableData, setTableData] = useState([]);
  const [imageData, setImageData] = useState("");
  const [editorData, setEditorData] = useState("");
  const navigate = useNavigate();

  console.log("formData", formData);

  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.byid_teacher(location.state.dataId, header);
      console.log("response", response);

      setFormData(response.data.data);
    } catch (error) {}
  };

  const handalerChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dataSubmit = async () => {
    const header = localStorage.getItem("_tokenCode");
    console.log("ocalStorage.getItem,", localStorage.getItem("_userId"));
    try {
      if (location.state === null) {
        const reqObj = {
          name: formData.name,
          emailId: formData.emailId,
          mobileNo: formData.mobileNo,
          address: formData.address,
          qualification: formData.qualification,
        };
        console.log("reqObj", reqObj);
        const response = await API.add_teacher(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/author/expert");
          MESSAGE(response.data.msg, 1);
        }
      } else {
        const reqObj = {
          name: formData.name,
          emailId: formData.emailId,
          mobileNo: formData.mobileNo,
          address: formData.address,
          qualification: formData.qualification,
          id: location.state.dataId,
          status: formData.status,
        };
        console.log("reqObj", reqObj);
        const response = await API.edit_teacher(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/author/expert");
          MESSAGE(response.data.msg, 1);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getdetailsData();
  }, []);
  return (
    <>
      <section class="section">
        <div class="page-heading">
          <h3>{location.state === null ? "Add Expert" : "Edit Expert"}</h3>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.emailId}
                    name="emailId"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.mobileNo}
                    name="mobileNo"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.qualification}
                    name="qualification"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div
                class={location.state === null ? "col-md-6 d-none" : "col-md-6"}
              >
                <div class="form-group">
                  <label for="basicInput">Status</label>
                  <select
                    onChange={handalerChanges}
                    value={formData.status}
                    name="status"
                    className="form-control"
                  >
                    <option>--- Select ---</option>
                    <option value="1">Active</option>
                    <option value="0">In-Active</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="disabledInput">Address</label>
                  <textarea
                    rows="1"
                    cols="1"
                    onChange={handalerChanges}
                    value={formData.address}
                    name="address"
                    class="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>

              <div className="buttons customBtn mt-3">
                <button class="btn btn-primary" onClick={dataSubmit}>
                  {location.state === null ? "Add Expert" : "Update Expert"}
                  <div class="icon dripicons dripicons-arrow-right"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddExpert;
