import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as API from "../../Api/index";
import { async } from "react-input-emoji";
import { MESSAGE } from "../../../helpers/commonData";
const initialData = {
  categoryId: "",
  createdBy: "",
  title: "",
  shortDes: "",
  description: "",
};

const AddBlog = () => {
  const location = useLocation();
  console.log("location", location);
  const [formData, setFormData] = useState(initialData);
  const [tableData, setTableData] = useState([]);
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
      setTableData(response.data.data);
      const blog_response = await API.byid_blog(location.state.dataId, header);
      setFormData(blog_response.data.data);
    } catch (error) {}
  };

  const handalerChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dataSubmit = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        categoryId: formData.categoryId,
        createdBy: localStorage.getItem("_userId"),
        title: formData.title,
        shortDes: formData.shortDes,
        description: editorData,
        image: imageData,
        id: location.state.dataId,
      };
      console.log("reqObj", reqObj);
      if (location.state === null) {
        console.log("hfhfgjhsj");
        const response = await API.add_blog(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/blog");
          MESSAGE(response.data.msg);
        }
      } else {
        console.log("edit");
        const response = await API.edit_blog(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          navigate("/blog");
          MESSAGE(response.data.msg);
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
          <h3>{location.state === null ? "Add Blog" : "Edit Blog"}</h3>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
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
              <div className="col-md-6">
                <div className="form-group">
                  <label for="basicInput">Upload image</label>
                  <label for="file" className="fileUploade">
                    <div class="icon dripicons dripicons-browser-upload"></div>{" "}
                    Upload image
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
              <div class="col-md-6">
                <div class="form-group">
                  <label for="disabledInput">Short Description</label>
                  <textarea
                    rows="5"
                    cols="5"
                    onChange={handalerChanges}
                    value={formData.shortDes}
                    name="shortDes"
                    class="form-control"
                    placeholder="Short Description"
                  ></textarea>
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

export default AddBlog;
