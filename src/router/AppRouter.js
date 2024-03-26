import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
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
const AppRouter = () => {
  const param = useParams();
  //const location = useLocation();

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
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/review" element={<Review />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/order" element={<Orderpage />} />
          <Route path="/orders" element={<OrderNew />} />
          <Route path="/account" element={<UserDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
