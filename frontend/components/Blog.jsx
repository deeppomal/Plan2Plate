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
    <div className="lg:pt-10">
      <div className="flex items-center justify-center h-screen lg:pt-10 mt-20">
        <div className="h-screen w-screen fixed">
          <Image src="/grocery.png" alt="background picture" layout="fill" />
        </div>
        <div className="bg-white flex w-2/3 z-30 p-3 rounded-md items-center justify-center shadow-xl flex-col mt-10 lg:pt-20 mt-10 sm:w-2/3">
          <div className="pt-5 pb-80 sm:pt-24 sm:pb-40 lg:pt-50 lg:pb-48">
            <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h2 className="font text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Food Blog
                </h2>
                <div className="lg:col-span-6 col-span-1">
                  {blogs.map((post, index) => (
                    <PostCard post={post} key={index} />
                  ))}
                </div>
              </div>

              <div className="mt-15">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-6xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="lg:col-span-4 col-span-1">
                          <div className="lg:sticky relative top-8">
                            <PostWidget post={blogs} key={blogs.index} />

                            <Categories post={blogs} key={blogs.index} />
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
