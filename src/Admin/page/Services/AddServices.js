import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as API from "../../Api/index";
import { async } from "react-input-emoji";
import { MESSAGE } from "../../../helpers/commonData";
import { Edit } from "react-feather";
import { IMG } from "../../Api/constant";
const initialData = {
  categoryId: "",
  subcategoryId: "",
  title: "",
  description: "",
};

const AddServices = () => {
  const location = useLocation();
  //console.log("location", location);
  const [formData, setFormData] = useState(initialData);
  const [tableData, setTableData] = useState([]);
  const [tableDataSub, setTableDataSub] = useState([]);
  const [imageData, setImageData] = useState("");
  const [editorData, setEditorData] = useState("");
  const navigate = useNavigate();

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
      const response = await API.catagori_listing(header);
      const mainData = response.data.data.filter((item) => item.useFor === "2");
      setTableData(mainData);
      const blog_response = await API.byid_services(
        location.state.dataId,
        header
      );
      console.log("blog_response", blog_response);
      setFormData(blog_response.data.data);
      const editSubresponse = await API.catagoriBySubcatagori(
        blog_response.data.data.categoryId
      );
      console.log("editSubresponse", editSubresponse);
      setTableDataSub(editSubresponse.data.data);
      //handalerChanges(blog_response.data.data.categoryId);
    } catch (error) {}
  };

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    if (name === "categoryId") {
      const response = await API.catagoriBySubcatagori(e.target.value);
      console.log("response", response);
      setTableDataSub(response.data.data);
    }

    setFormData({ ...formData, [name]: value });
  };

  const dataSubmit = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        categoryId: formData.categoryId,
        subcategoryId: formData.subcategoryId,
        title: formData.title,
        description: editorData,
        image: imageData,
        id: location.state.dataId,
        // createdBy: localStorage.getItem("_userId"),
      };
      console.log("reqObj", reqObj);
      if (location.state === null) {
        const response = await API.add_services(reqObj, header);
        console.log("responseaaaa", response);
        if (response.data.success === 1) {
          navigate("/services");
          MESSAGE(response.data.msg, 1);
        }
      } else {
        console.log("edit");
        const response = await API.edit_services(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/services");
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
          <h3>{location.state === null ? "Add Services" : "Edit  Services"}</h3>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="basicInput">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.title}
                    name="title"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Categories</label>
                  <select
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.categoryId}
                    name="categoryId"
                  >
                    <option> --- Select --- </option>
                    {tableData.map((item, index) => (
                      <option key={index} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="basicInput">Sub Categories</label>
                  <select
                    class="form-control"
                    onChange={handalerChanges}
                    value={formData.subcategoryId}
                    name="subcategoryId"
                  >
                    <option> --- Select --- </option>
                    {tableDataSub.map((item, index) => (
                      <option key={index} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label for="basicInput">Upload image</label>
                  <label for="file" className="fileUploade">
                    {imageData ? (
                      <>
                        {imageData ? (
                          <img className="editBlogImg" src={imageData} alt="" />
                        ) : (
                          <>
                            <div class="icon dripicons dripicons-browser-upload"></div>
                            Upload image
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {formData.image ? (
                          <>
                            <Edit />
                            <img
                              className="editBlogImg"
                              src={IMG + formData.image}
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <div class="icon dripicons dripicons-browser-upload"></div>
                            Upload image
                          </>
                        )}
                      </>
                    )}
                    <form encType="multipart/form-data">
                      <input
                        hidden
                        id="file"
                        type="file"
                        onChange={imageUploading}
                        class="image-preview-filepond"
                      />
                    </form>
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div class="form-group">
                  <label for="disabledInput">Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData.description}
                    onReady={(editor) => {}}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setEditorData(data);
                    }}
                  />
                </div>
              </div>
              <div className="buttons customBtn mt-3">
                <button
                  class="btn btn-primary rounded-pill"
                  onClick={dataSubmit}
                >
                  Submit
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

export default AddServices;
