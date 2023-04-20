import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";
import Categories from "./Categories";
import Image from "next/legacy/image";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://plan2plateapi.onrender.com' + "/blogs");

         console.log("unsorted data");
         
        setBlogs(result.data.data);
        console.log(blogs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="">
      <div className="flex justify-center min-h-screen">
        <div className="h-screen w-screen fixed">
          <Image src="/grocery.png" alt="background picture" layout="fill" />
        </div>
        <div className="flex min-h-screen w-11/12 z-30 mt-32">
          <div className="w-2/3 flex p-3 flex-col items-center">
            <p className="text-center font-bold text-3xl">
              Food Blog
            </p>
            <div className="mt-5 w-3/4">
              {blogs.map((post, index) => (
                <PostCard post={post} key={index} />
              ))}
            </div>
              
          </div>
          <div className="w-1/3 p-3 flex justify-center">
            <div className="w-11/12">
              <PostWidget post={blogs} key={blogs.index} />
              <Categories post={blogs} key={blogs.index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
