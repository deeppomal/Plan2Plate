import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

export default function PostWidget({ post }) {
 
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h4 className="text-xl mb-8 font-semibold border-b pb-4">Recent Blogs</h4>
      {post.map((post, index) => (
        <div key={index}  className="flex items-center w-full mb-4">
          <div className="w-10 flex-none">
            <img
              alt={post.BlogAuthorImageUrl}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.BlogAuthorImageUrl}
              key={post.BlogTitle}
            />
          </div>
          <div className="flex-grow ml-4">
            <h4 className="text-l  font-semibold">
              <p className="text-gray-500 font-xs">
                {/* {slug ? "Related Posts" : "Recent Posts"} */}
                {moment(post.BlogAddedDate).format("MMM-DD, YYYY")}
              </p>
            </h4>

            {post.BlogTitle}

            <Link href={`/blog/${post.title}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
