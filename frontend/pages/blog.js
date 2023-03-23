import React from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog"
import { NavbarNew } from "../components/NavbarNew";
import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <div>
      <NavbarNew />
      <Blog />
      <Footer/>
    </div>
  );
};

export default Blogs;
