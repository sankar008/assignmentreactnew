import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../Api/index";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { MESSAGE } from "../../../helpers/commonData";
const Categoris = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDataBlog, setTableDataBlog] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [menuFect, setMenuFect] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const [chooseType, setChooseType] = useState("");
  const [showType, setShow] = useState("1");

  console.log("modalStatus", modalStatus);

  const getdetailsData = async (data) => {
    setShow(data);
    console.log("data", data);
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagori_listing(header, data);
      console.log("response", response);
      const mainData =
        data === "1"
          ? response.data.data.filter((item) => item.useFor === "2")
          : response.data.data.filter((item) => item.useFor === "1");
      console.log("mainData", mainData);
      setTableData(mainData);

      setLoader(response.data.data);
    } catch (error) {}
  };

  const menufactheDelete = async (menuFecId) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.categori_delete(menuFecId, header, showType);
      if (response.data.success === 1) {
        getdetailsData(showType);
      }
    } catch (error) {}
  };

  const openModalSellar = async (modalTpp, sellerId) => {
    const header = localStorage.getItem("_tokenCode");
    console.log("sellerId", sellerId);

    setModalStatus(modalTpp);
    setSellerId(sellerId);
    setOpenModal(true);
    try {
      // const Dataresponse = await API.catagori_listing_sub(header);
      // console.log("Dataresponse", Dataresponse);
      // setTableData(Dataresponse.data.data);
      // ? EDIT TIME SHOW
      const response = await API.catagori_listing_byid(sellerId, header);
      console.log("response", response.data.data);
      setChooseType(response.data.data.categoryId);
      setMenuFect(response.data.data.name);
    } catch (error) {}
  };

  const add_editSellerData = async () => {
    // ? CATAGORI ADD
    if (modalStatus === "1") {
      const header = localStorage.getItem("_tokenCode");
      try {
        const reqObj = {
          name: menuFect,
          useFor: showType === "1" ? 2 : 1,
        };
        console.log("reqObj", reqObj);
        const response = await API.add_categoris(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          closeModal();
          getdetailsData(showType);
          MESSAGE(response.data.msg, 1);
          setMenuFect("");
        }
      } catch (error) {}
    } else {
      const header = localStorage.getItem("_tokenCode");
      const reqObj = {
        name: menuFect,
        id: sellerId,
        useFor: showType === "1" ? 2 : 1,
      };
      console.log("reqObj", reqObj);
      const response = await API.edit_categoris(reqObj, header);
      console.log("response", response);
      if (response.data.sucess === 1) {
        closeModal();
        getdetailsData(showType);
        MESSAGE(response.data.msg, 1);
        setMenuFect("");
      }
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
                Services Category
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
                Blog Category
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
                    <h4 class="card-title">All Categories</h4>
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
                              <th>ID</th>
                              <th>NAME</th>

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
                                      <td class="text-bold-500">{item.name}</td>

                                      <td>
                                        <div class="buttons">
                                          {showType === "1" ? (
                                            <Link
                                              state={{ id: item._id }}
                                              to="/sub-category"
                                              class="btn icon btn-info"
                                            >
                                              Show Sub Category
                                            </Link>
                                          ) : (
                                            ""
                                          )}
                                          <span
                                            onClick={() =>
                                              openModalSellar("2", item._id)
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
            {modalStatus === "1" ? (
              <h5 class="modal-title" id="exampleModalLabel">
                Add Categories
              </h5>
            ) : (
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Categories
              </h5>
            )}
          </div>
          <div class="modal-body">
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
