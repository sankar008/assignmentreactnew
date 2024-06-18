import React from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import Counter from "./Counter";
import Featurs from "./Featurs";
import HowItWorks from "./HowItWorks";
import Instructor from "./Instructor";
import OurStatus from "./OurStatus";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      {/* <Instructor /> */}
      <HowItWorks />
      <Counter />
      <Services />
      <Featurs />
      <OurStatus />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
