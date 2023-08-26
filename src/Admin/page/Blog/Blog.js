import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../../Admin/Api/index";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IMG } from "../../Api/constant";

const initialData = {
  title: "",
  shortDes: "",
  categoryId: "",
};

const Blog = () => {
  const [tableData, setTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [imageData, setImageData] = useState("");
  const [formData, setFormData] = useState(initialData);
  const [editorData, setEditorData] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const [blogCataData, setBlogCataData] = useState([]);

  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };
  // ? HANDALER
  const handalerChnages = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagori_listing_blog(header);
      const cat_response = await API.catagori_listing(header);
      console.log("cat_response", cat_response);
      setBlogCataData(cat_response.data.data);
      setLoader(response.data.data);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const menufactheDelete = async (menuFecId) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.categori_delete_blog(menuFecId, header);
      console.log("response0", response);
      if (response.data.success === 1) {
        getdetailsData();
      }
    } catch (error) {}
  };

  const openModalSellar = async (sellerId) => {
    const header = localStorage.getItem("_tokenCode");
    if (sellerId === "1") {
      setFormData("");
    }
    setModalStatus(sellerId);
    setSellerId(sellerId);
    setOpenModal(true);
    try {
      const response = await API.catagori_listing_byid_blog(sellerId, header);
      setFormData(response.data.data);
      setEditorData(response.data.data.description);
    } catch (error) {}
  };

  const add_editSellerData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      // ? CATAGORI ADD
      if (modalStatus === "1") {
        const reqObj = {
          categoryId: formData.categoryId,
          createdBy: localStorage.getItem("_userId"),
          title: formData.title,
          shortDes: formData.shortDes,
          description: editorData,
          image: imageData,
        };
        console.log("reqObj", reqObj);
        const response = await API.add_categoris_blog(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          closeModal();
          getdetailsData();
          toast(response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success",
            theme: "colored",
          });
          setFormData("");
        }
      } else {
        const reqObj = {
          categoryId: formData.categoryId,
          createdBy: localStorage.getItem("_userId"),
          title: formData.title,
          shortDes: formData.shortDes,
          description: editorData,
          image: imageData,
          id: sellerId,
        };
        console.log("reqObj", reqObj);
        const response = await API.edit_categoris_blog(reqObj, header);
        console.log("response", response);
        if (response.data.sucess === 1) {
          closeModal();
          getdetailsData();
          toast(response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success",
            theme: "colored",
          });
          setFormData("");
        }
      }
    } catch (error) {}
  };

  //   const searchHandaler = async (e) => {
  //     if (e.target.value === "") {
  //       getdetailsData();
  //     } else {
  //       const header = localStorage.getItem("_tokenCode");
  //       try {
  //         const response = await API.menufact_search(e.target.value, header);

  //         setTableData(response.data.data);
  //       } catch (error) {}
  //     }
  //   };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getdetailsData();
  }, []);

  return (
    <>
      <section class="section">
        <div class="page-heading">
          <h3>Manage Blog Data</h3>
        </div>
        <div class="card">
          <div class="card-header">
            <div className="row">
              <div className="col-md-11">
                <h4 class="card-title">Blog list</h4>
              </div>
              <div className="col-md-4 d-none">
                <div class="form-group position-relative has-icon-right">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search here"
                    // onChange={searchHandaler}
                  />
                  <div class="form-control-icon">
                    <i class="bi bi-search"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-end">
                <button
                  onClick={() => openModalSellar("1")}
                  class="btn icon btn-primary"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div className="col-md-12 loaderDoth">
                {loader === true ? (
                  <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#d997a0"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName="text-center m-auto"
                    visible={true}
                  />
                ) : (
                  <div class="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Title</th>
                          <th>Short description</th>
                          <th>Description</th>
                          <th>Image</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {tableData.length === 0
                            ? ""
                            : tableData.map((item, index) => (
                                <tr key={index}>
                                  <td class="text-bold-500">{index + 1}</td>
                                  <td class="text-bold-500">{item.title} </td>
                                  <td class="text-bold-500">
                                    {item.shortDes}{" "}
                                  </td>
                                  <td class="text-bold-500">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.description,
                                      }}
                                    />
                                  </td>
                                  <td class="text-bold-500">
                                    <img
                                      className="w-25"
                                      src={IMG + item.image}
                                    />
                                  </td>
                                  <td>
                                    <div class="buttons">
                                      <span
                                        onClick={() =>
                                          openModalSellar(item._id)
                                        }
                                        class="btn icon btn-primary"
                                      >
                                        <i class="bi bi-pencil"></i>
                                      </span>
                                      <button
                                        onClick={() =>
                                          menufactheDelete(item._id)
                                        }
                                        class="btn icon btn-danger"
                                      >
                                        <i class="bi bi-x"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                        </>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal open={openModal} onClose={closeModal}>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {modalStatus === "1" ? "Add Blog" : "Edit Blog "}
            </h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="basicInput">Title</label>
              <input
                type="text"
                onChange={handalerChnages}
                value={formData.title}
                placeholder="Title"
                name="title"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="basicInput">Short description</label>
              <input
                type="text"
                placeholder="Short description"
                onChange={handalerChnages}
                value={formData.shortDes}
                name="shortDes"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="basicInput">Image</label>
              <input
                type="file"
                onChange={imageUploading}
                name="image"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="basicInput">Categories</label>
              <select
                onChange={handalerChnages}
                value={formData.categoryId}
                class="form-control"
                name="categoryId"
              >
                <option> --- select ---</option>
                {blogCataData.map((item, index) => (
                  <option key={index} value={item._id}>
                    {" "}
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label for="basicInput">Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);
                  //console.log({ event, editor, data });
                }}
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={add_editSellerData}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Blog;
