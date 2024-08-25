import moment from "moment-timezone";
import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../api/constant";

const BlogSidBar = ({ tableData, blogCata }) => {
  return (
    <>
      <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
        <aside class="sidebar sticky-top">
          <div class="sidebar-widget links-widget">
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
                        <Link to="#">
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
                          class="overlay-box"
                        >
                          <span class="icon fa fa-link"></span>
                        </Link>
                      </figure>
                      <div class="text">
                        <Link to={`/blog-details/${item.slug}`}>
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
