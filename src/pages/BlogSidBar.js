import moment from "moment-timezone";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMG } from "../api/constant";
import * as API from "../api/index";
const BlogSidBar = ({ tableData, blogCata, setTableData, onRefreshPage }) => {
  const location = useLocation();
  const basePath = location.pathname.split("/").slice(0, 2).join("/");
  console.log(basePath);

  const handelarServicesData = async (data) => {
    try {
      const response = await API.blogCataWishData(data);
      console.log("responsesss", response);
      setTableData(response.data.data);
    } catch (error) {}
  };
  return (
    <>
      <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
        <aside class="sidebar sticky-top">
          <div
            class={
              basePath === "/blog-details"
                ? "d-none"
                : "sidebar-widget links-widget"
            }
          >
            <div class="sidebar-title">
              <h4>All Categories</h4>
            </div>
            <div class="widget-content">
              <ul class="blog-cat">
                {blogCata === undefined || blogCata.length === 0 ? (
                  "Loader..."
                ) : (
                  <>
                    {blogCata.map((item, index) => (
                      <li
                        key={index}
                        className="d-flex justify-content-between"
                      >
                        <Link
                          onClick={() => handelarServicesData(item._id)}
                          to="#"
                        >
                          {item.useFor === "1" ? item.name : ""}{" "}
                        </Link>
                        <span className="countBlog">({item.blogCount})</span>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div class="sidebar-widget popular-posts">
            <div class="sidebar-title">
              <h4>Recent Post</h4>
            </div>
            <div class="widget-content">
              {tableData.length === 0 ? (
                "Loader..."
              ) : (
                <>
                  {tableData.map((item, index) => (
                    <article
                      class="post"
                      onClick={() => onRefreshPage(item.slug)}
                    >
                      <figure class="post-thumb">
                        <img src={IMG + item.image} alt="" />
                        <Link
                          to={`/blog-details/${item.slug}`}
                          state={{
                            allBlog: tableData,
                            allCatagori: blogCata,
                          }}
                          class="overlay-box"
                        >
                          <span class="icon fa fa-link"></span>
                        </Link>
                      </figure>
                      <div class="text">
                        <Link
                          to={`/blog-details/${item.slug}`}
                          state={{
                            allBlog: tableData,
                            allCatagori: blogCata,
                          }}
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div class="post-info">
                        Admin, {moment(item.createdAt).format("MMMM Do YYYY")}
                      </div>
                    </article>
                  ))}
                </>
              )}
            </div>
          </div>

          <div class="sidebar-widget popular-posts">
            <div class="sidebar-title">
              <h4>Popular Post</h4>
            </div>
            <div class="widget-content">
              {tableData.length === 0 ? (
                "Loader..."
              ) : (
                <>
                  {tableData.map((item, index) => (
                    <article class="post">
                      <figure class="post-thumb">
                        <img src={IMG + item.image} alt="" />
                        <Link
                          to={`/blog-details/${item.slug}`}
                          state={{
                            allBlog: tableData,
                            allCatagori: blogCata,
                          }}
                          class="overlay-box"
                        >
                          <span class="icon fa fa-link"></span>
                        </Link>
                      </figure>
                      <div class="text">
                        <Link
                          state={{
                            allBlog: tableData,
                            allCatagori: blogCata,
                          }}
                          to={`/blog-details/${item.slug}`}
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div class="post-info">
                        Admin, {moment(item.createdAt).format("MMMM Do YYYY")}
                      </div>
                    </article>
                  ))}
                </>
              )}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default BlogSidBar;
