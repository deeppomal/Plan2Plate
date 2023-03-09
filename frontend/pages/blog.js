import React from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog"
import { NavbarNew } from "../components/NavbarNew";

const Blogs = () => {
  return (
    <div>
      <NavbarNew />
      <Blog/>
    </div>
  );
};

export default Blogs;
