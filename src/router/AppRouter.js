import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../pages/About";
import Benifits from "../pages/Benifits";
import Blog from "../pages/Blog";
import Faq from "../pages/Faq";
import HowItWork from "../pages/HowItWork";
import Login from "../pages/Login";
import Orderpage from "../pages/Orderpage";
import Review from "../pages/Review";
import ServicesS from "../pages/Services";
import Signup from "../pages/Signup";
import UserDashboard from "../pages/UserDashboard";
const AppRouter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Header />
      <div className="mainWarpr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/review" element={<Review />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/order" element={<Orderpage />} />
          <Route path="/account" element={<UserDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
