import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import OrderFrom from "../components/OrderFrom";
import OwlCarousel from "react-owl-carousel";
import * as API from "../Admin/Api/index";
import * as FAPI from "../api/index";
import { IMG } from "../api/constant";
import { Link, useLocation, useParams } from "react-router-dom";
import moment from "moment-timezone";
import OrderaType from "../components/OrderaType";
import BlogSidBar from "./BlogSidBar";
const BlogDetails = () => {
  const loaction = useLocation();
  console.log("loaction.state.allBlog", loaction.state.allBlog);

  const param = useParams();

  const [blogCata, setBlogCata] = useState([]);

  const [blogData, setBlogData] = useState([]);
  console.log("blogData", blogData);

  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await FAPI.blog_details(param.slug);
      setBlogData(response.data.data[0]);
      const cataresponse = await FAPI.catagori_listing();
      console.log("cataresponse", cataresponse);

      setBlogCata(cataresponse.data.data);
    } catch (error) {}
  };

  console.log("blogData", blogData);

  useEffect(() => {
    getdetailsData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="innerBanner banner-section-three"
        style={{
          backgroundImage: `url(https://theuniversalitservices.com/wp-content/uploads/2022/01/Blog-Page-Banner.jpg)`,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <h1 class="text_center479">
                Get Personalized <br />
                <span className="typingColor">
                  <Typewriter
                    words={[
                      "Lab Reports",
                      "Presentations",
                      "Project Reports",
                      "Live Sessions",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />{" "}
                </span>
                <br />
                available24X7
              </h1>
              <div className="sidebar ">
                <OwlCarousel
                  className="testimonial-carousel bannerCros"
                  loop
                  margin={10}
                  autoplay={true}
                  items={1}
                  dots={false}
                  responsiveClass={true}
                  autoplaySpeed={5000}
                >
                  {loaction.state.allBlog.map((item, index) => (
                    <div class="item">
                      <div class="sidebar-widget popular-posts">
                        <div class="widget-content">
                          <article class="post">
                            <figure class="post-thumb">
                              <img src={IMG + item.image} alt="" />
                              <Link
                                to={`/blog-details/${item.slug}`}
                                state={{
                                  allBlog: loaction.state.allBlog,
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
                                  allBlog: loaction.state.allBlog,
                                  allCatagori: blogCata,
                                }}
                              >
                                {item.title}
                              </Link>
                            </div>
                            <div class="post-info">
                              Admin,
                              {moment(item.createdAt).format("MMMM Do YYYY")}
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-6">
              <OrderaType />
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-page-container">
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="content-side border_right_blog col-lg-9 col-md-12 col-sm-12">
              <section class="blog-detail">
                <div class="d">
                  <div class="rowsdass">
                    <div class="col-sm-12sds col-md-8sds col-lg-8sds">
                      <h1>{blogData.title}</h1>
                      <div class="row">
                        <div class="col-12 col-lg-12 col-md-12 col-sm-12 post-info d-flex justify-content-start align-items-center">
                          <div class="items d-flex">
                            <img
                              src="https://cdn1.myassignmenthelp.com/blog-assets/author-icon.svg"
                              alt="blog author name"
                              height="24 "
                              width="24"
                              class="mr-2 loading"
                              data-was-processed="true"
                            />
                            <span>
                              <>Admin</>
                            </span>
                          </div>
                          <div class="items d-flex">
                            <img
                              src="https://cdn1.myassignmenthelp.com/blog-assets/published-date-icon.svg"
                              alt="blog author name"
                              height="24 "
                              width="24"
                              class="mr-2 loading"
                              data-was-processed="true"
                            />
                            <span>
                              {moment(blogData.createdAt).format(
                                "MMMM Do YYYY"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src={IMG + blogData.image}
                          // alt="blog author name"
                          class="rounded loaded"
                          height="313"
                          width="100%"
                        />

                        <div class="card-body">
                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blogData.description,
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <BlogSidBar
              tableData={loaction.state.allBlog}
              blogCata={blogCata}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
