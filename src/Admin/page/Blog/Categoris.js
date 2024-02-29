import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../Api/index";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
const Categoris = () => {
  const [tableData, setTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [menuFect, setMenuFect] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const [chooseType, setChooseType] = useState("");
  const [showType, setShow] = useState("");

  const getdetailsData = async (data) => {
    setShow(data);
    console.log("data", data);
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagori_listing(header, data);
      console.log("response", response);
      setLoader(response.data.data);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const catagoerisTypeData = () => {};

  const menufactheDelete = async (menuFecId) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.categori_delete(menuFecId, header, showType);
      if (response.data.success === 1) {
        getdetailsData(showType);
      }
    } catch (error) {}
  };

  const openModalSellar = async (sellerId) => {
    const header = localStorage.getItem("_tokenCode");
    if (sellerId === "1") {
      setMenuFect("");
    }
    setModalStatus(sellerId);
    setSellerId(sellerId);
    setOpenModal(true);
    try {
      const Dataresponse = await API.catagori_listing_sub(header);
      console.log("Dataresponse", Dataresponse);
      setTableData(Dataresponse.data.data);
      // ? EDIT TIME SHOW
      const response = await API.catagori_listing_byid(
        sellerId,
        header,
        showType
      );
      console.log("response", response.data.data);
      setChooseType(response.data.data.categoryId);
      setMenuFect(response.data.data.name);
    } catch (error) {}
  };

  const add_editSellerData = async () => {
    const header = localStorage.getItem("_tokenCode");
    if (showType === "1") {
      try {
        // ? CATAGORI ADD
        if (modalStatus === "1") {
          const reqObj = {
            name: menuFect,
            useFor: chooseType,
          };
          const response = await API.add_categoris(reqObj, header, showType);
          if (response.data.success === 1) {
            closeModal();
            getdetailsData(showType);
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
            setMenuFect("");
          }
        } else {
          const reqObj = {
            name: menuFect,
            id: sellerId,
            useFor: chooseType,
          };
          console.log("reqObj", reqObj);
          const response = await API.edit_categoris(reqObj, header, showType);
          console.log("response", response);
          if (response.data.sucess === 1) {
            closeModal();
            getdetailsData(showType);
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
            setMenuFect("");
          }
        }
      } catch (error) {}
    } else {
      try {
        // ? SUB-CATAGORI ADD
        if (modalStatus === "1") {
          const reqObj = {
            name: menuFect,
            categoryId: chooseType,
          };
          const response = await API.add_categoris(reqObj, header, showType);
          if (response.data.success === 1) {
            closeModal();
            setChooseType("");
            getdetailsData(showType);
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
            setMenuFect("");
          }
        } else {
          const reqObj = {
            name: menuFect,
            id: sellerId,
            categoryId: chooseType,
          };
          console.log("reqObj", reqObj);
          const response = await API.edit_categoris(reqObj, header, showType);
          console.log("response", response);
          if (response.data.sucess === 1) {
            closeModal();
            getdetailsData(showType);
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
            setMenuFect("");
          }
        }
      } catch (error) {}
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getdetailsData("1");
  }, []);

  return (
    <>
      <section class="section">
        <div class="card">
          <ul class="nav nav-tabs customTab" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={() => getdetailsData("1")}
              >
                Categories
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => getdetailsData("2")}
              >
                Sub-Categories
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="card-header">
                <div className="row">
                  <div className="col-md-11">
                    <h4 class="card-title">
                      All {showType === "1" ? "Categories" : "Sub-Categories"}{" "}
                      list
                    </h4>
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
                              <th>NAME</th>
                              {showType === "1" ? <th>Use For</th> : ""}
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
                                      <td class="text-bold-500">
                                        {item.name}{" "}
                                      </td>
                                      {showType === "1" ? (
                                        <td class="text-bold-500">
                                          {item.useFor === "2"
                                            ? "Services"
                                            : "Blogs"}{" "}
                                        </td>
                                      ) : (
                                        ""
                                      )}

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
            <div
              class="tab-pane"
              id="profiled"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              fsdfs
            </div>
          </div>
        </div>
      </section>
      <Modal open={openModal} onClose={closeModal}>
        <div class="modal-content editSeller">
          <div class="modal-header">
            {showType === "1" ? (
              <h5 class="modal-title" id="exampleModalLabel">
                {modalStatus === "1" ? "Add Categories " : "Edit Categories "}
              </h5>
            ) : (
              <h5 class="modal-title" id="exampleModalLabel">
                {modalStatus === "1"
                  ? "Add Sub-Categories "
                  : "Edit Sub-Categories "}
              </h5>
            )}
          </div>
          <div class="modal-body">
            {showType === "1" ? (
              <div class="form-group">
                <label for="basicInput">Choose Type</label>
                <select
                  class="form-control"
                  onChange={(e) => setChooseType(e.target.value)}
                  value={chooseType}
                >
                  <option> --- Select --- </option>
                  <option value="2"> Services </option>
                  <option value="1"> Blogs </option>
                </select>
              </div>
            ) : (
              <div class="form-group">
                <label for="basicInput">Choose Category</label>
                <select
                  class="form-control"
                  onChange={(e) => setChooseType(e.target.value)}
                  value={chooseType}
                >
                  <option> --- Select --- </option>
                  {tableData.map((item, index) => (
                    <>
                      {item.useFor === "2" ? (
                        <option key={index} value={item._id}>
                          {item.name}
                        </option>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </select>
              </div>
            )}

            <div class="form-group">
              <label for="basicInput">Name</label>
              <input
                type="text"
                onChange={(e) => setMenuFect(e.target.value)}
                value={menuFect}
                name="firstName"
                class="form-control"
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

export default Categoris;
