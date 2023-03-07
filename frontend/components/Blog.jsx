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
    <div className="flex items-center justify-center h-screen">
      <div className="h-screen w-screen z-10 fixed">
        <Image src="/grocery.png" alt="background picture" layout="fill" />
      </div>
      <div className="bg-white flex w-1/2 z-30 p-3 rounded-md items-center justify-center shadow-xl flex-col">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Food Blog
              </h1>
              <div className="lg:col-span-8 col-span-1">
                {blogs.map((post, index) => (
                  <PostCard post={post} key={index} />
                ))}
              </div>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="lg:col-span-4 col-span-1">
                          <div className="lg:sticky relative top-8">
                            <PostWidget />
                            <Categories />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
