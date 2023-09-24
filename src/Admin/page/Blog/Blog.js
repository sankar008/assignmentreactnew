import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../../Admin/Api/index";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IMG } from "../../Api/constant";
import { async } from "react-input-emoji";
import { MESSAGE } from "../../../helpers/commonData";

const initialData = {
  title: "",
  shortDes: "",
  categoryId: "",
};

const Blog = () => {
  const [tableData, setTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_blog(header);
      console.log("response", response);
      setLoader(response.data.data);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const blogDelet = async (data) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.delete_blog(data, header);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg);
        getdetailsData();
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
          <div className="row">
            <div className="col-md-10">
              <h3>Manage Blog Data</h3>
            </div>
            <div className="col-md-2 text-end">
              <Link to="/categories" class="btn icon btn-primary">
                Blog categories
              </Link>
            </div>
          </div>
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
                <Link to="/blog/add" class="btn icon btn-primary">
                  <i class="bi bi-plus"></i>
                </Link>
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
                          <th>Categories</th>
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
                                  <td class="text-bold-500 w-25">
                                    {item.title}{" "}
                                  </td>
                                  <td class="text-bold-500">
                                    {item.category.name}{" "}
                                  </td>
                                  <td class="text-bold-500 w-25">
                                    {item.shortDes}{" "}
                                  </td>
                                  <td class="text-bold-500 w-25">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.description,
                                      }}
                                    />
                                  </td>
                                  <td class="text-bold-500 w-75">
                                    <img
                                      className="w-25"
                                      src={IMG + item.image}
                                    />
                                  </td>
                                  <td>
                                    <div class="buttons">
                                      <Link
                                        to="/blog/edit"
                                        state={{ dataId: item._id }}
                                      >
                                        <span class="btn icon btn-primary">
                                          <i class="bi bi-pencil"></i>
                                        </span>
                                      </Link>
                                      <button
                                        onClick={() => blogDelet(item._id)}
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
    </>
  );
};

export default Blog;
