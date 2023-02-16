import Image from "next/image";
import styles from "../styles/Home.module.css";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(process.env.API_ENDPOINT + "/blogs");
        console.log(result.data.data);
        setBlogs(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {blogs.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
