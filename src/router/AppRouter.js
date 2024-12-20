import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../pages/About";
import Benifits from "../pages/Benifits";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Faq from "../pages/Faq";
import HowItWork from "../pages/HowItWork";
import Login from "../pages/Login";
import OrderNew from "../pages/OrderNew";
import Orderpage from "../pages/Orderpage";
import Review from "../pages/Review";
import ServicesS from "../pages/Services";
import Signup from "../pages/Signup";
import UserDashboard from "../pages/UserDashboard";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "../pages/ForgotPassword";
import * as API from "../api/index";
import ServicesDetails from "../pages/Services/ServicesDetails";
import SubServices from "../pages/Services/SubServices";
import Solutions from "../pages/Solutions";
const AppRouter = () => {
  const param = useParams();
  const [tableData, setTableData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const getdetailsData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.catagori_listing();
      const mainData = response.data.data.filter((item) => item.useFor === "2");
      setTableData(mainData);
    } catch (error) {}
  };

  const services_sub = async (data) => {
    console.log("data", data);

    try {
      const fresponse = await API.services_cataWishData(data);
      console.log("fresponse", fresponse);
      if (fresponse.data.success === 1) {
        setServicesData(fresponse.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getdetailsData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header tableData={tableData} services_sub={services_sub} />
        <div className="mainWarpr">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/services"
              element={<ServicesS servicesData={servicesData} />}
            />
            <Route
              path="/service"
              element={<SubServices servicesData={servicesData} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/services-details/:slug"
              element={<ServicesDetails />}
            />
            <Route path="/blog-details/:slug" element={<BlogDetails />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/how-it-work" element={<HowItWork />} />
            <Route path="/benifits" element={<Benifits />} />
            <Route path="/review" element={<Review />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/order" element={<Orderpage />} />
            <Route path="/orders" element={<OrderNew />} />
            <Route path="/account" element={<UserDashboard />} />
            <Route path="/solutions/:id" element={<Solutions />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
