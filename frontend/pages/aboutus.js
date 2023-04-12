import React from "react";
import AboutUs from "../components/AboutUs"
import { NavbarNew } from "../components/NavbarNew";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <div>
      <NavbarNew />
      <AboutUs />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Aboutus;
