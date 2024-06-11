import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as API from "../../Api/index";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
const Subcategory = () => {
  const location = useLocation();
  const [tableData, setTableData] = useState([]);
  const [tableDataBlog, setTableDataBlog] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [menuFect, setMenuFect] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const [chooseType, setChooseType] = useState("");
  const [showType, setShow] = useState("1");

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagoriBySubcatagori(
        location.state.id,
        header
      );
      console.log("response", response);
      setTableData(response.data.data);

      setLoader(response.data.data);
    } catch (error) {}
  };

  const menufactheDelete = async (menuFecId) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.categori_delete(menuFecId, header);
      if (response.data.success === 1) {
        getdetailsData(showType);
      }
    } catch (error) {}
  };

  const openModalSellar = async (sellerId) => {
    // const header = localStorage.getItem("_tokenCode");
    // if (sellerId === "1") {
    //   setMenuFect("");
    // }
    setModalStatus(sellerId);
    setSellerId(sellerId);
    setOpenModal(true);
    // try {
    //   const Dataresponse = await API.catagori_listing_sub(header);
    //   console.log("Dataresponse", Dataresponse);
    //   setTableData(Dataresponse.data.data);
    //   // ? EDIT TIME SHOW
    //   const response = await API.catagori_listing_byid(
    //     sellerId,
    //     header,
    //     showType
    //   );
    //   console.log("response", response.data.data);
    //   setChooseType(response.data.data.categoryId);
    //   setMenuFect(response.data.data.name);
    //} catch (error) {}
  };

  const add_editSellerData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        name: menuFect,
        categoryId: location.state.id,
      };
      console.log("reqObj", reqObj);
      const response = await API.add_subcategoris(reqObj, header);
      console.log("response", response);
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
      // ? CATAGORI ADD
      // if (modalStatus === "1") {

      // } else {
      //   const reqObj = {
      //     name: menuFect,
      //     id: sellerId,
      //     useFor: chooseType,
      //   };
      //   console.log("reqObj", reqObj);
      //   const response = await API.edit_categoris(reqObj, header, showType);
      //   console.log("response", response);
      //   if (response.data.sucess === 1) {
      //     closeModal();
      //     getdetailsData(showType);
      //     toast(response.data.msg, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       type: "success",
      //       theme: "colored",
      //     });
      //     setMenuFect("");
      //   }
      // }
    } catch (error) {}
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getdetailsData();
  }, []);

  return (
    <>
      <section class="section">
        <div class="card">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 class="card-title">All Sub Categories</h4>
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
                    <Link to="/categories" class="btn icon btn-primary">
                      Back
                    </Link>
                  </div>
                  <div className="col-md-1 text-end">
                    <button
                      onClick={openModalSellar}
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
                              {/* {showType === "1" ? (
                                <th>CATEGORY FOR</th>
                              ) : (
                                <th>CATEGORY </th>
                              )} */}
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
                                      {/* {showType === "1" ? (
                                        <td class="text-bold-500">
                                          {item.useFor === "2"
                                            ? "Services"
                                            : "Blogs"}{" "}
                                        </td>
                                      ) : (
                                        <td class="text-bold-500">fdgdf</td>
                                      )} */}

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
                Add Sub Category
              </h5>
            ) : (
              <h5 class="modal-title" id="exampleModalLabel">
                Add Sub Category
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

export default Subcategory;
