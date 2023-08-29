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

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagori_listing(header);
      console.log("response", response);
      setLoader(response.data.data);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const menufactheDelete = async (menuFecId) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.categori_delete(menuFecId, header);
      if (response.data.success === 1) {
        getdetailsData();
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
      const response = await API.catagori_listing_byid(sellerId, header);
      setMenuFect(response.data.data.name);
    } catch (error) {}
  };

  const add_editSellerData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      // ? CATAGORI ADD
      if (modalStatus === "1") {
        const reqObj = {
          name: menuFect,
        };
        const response = await API.add_categoris(reqObj, header);
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
          setMenuFect("");
        }
      } else {
        const reqObj = {
          name: menuFect,
          id: sellerId,
        };
        console.log("reqObj", reqObj);
        const response = await API.edit_categoris(reqObj, header);
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
          setMenuFect("");
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
          <h3>Manage Blog categories</h3>
        </div>
        <div class="card">
          <div class="card-header">
            <div className="row">
              <div className="col-md-11">
                <h4 class="card-title">Blog categories list</h4>
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
                                  <td class="text-bold-500">{item.name} </td>

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
        <div class="modal-content editSeller">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {modalStatus === "1" ? "Add Categories " : "Edit Categories "}
            </h5>
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
