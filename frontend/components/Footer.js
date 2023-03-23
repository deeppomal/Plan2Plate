import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
    <>
      <div className="bg-gray-300 relative h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Plan 2 <span className="text-rose-800">Plate</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-rose-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Book An Expert
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Newsletter
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Customize Plan
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Deals
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Serives
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-800 cursor-pointer">
              Downloads & Resources
            </li>
          </ul>
        </div>
      </div>
      <div className="flex relative flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023-2024 All rights reserved |
          <span className="hover:text-rose-800 font-semibold cursor-pointer">
            Build with ❤ by{" Deep-Mihir-Namrata-Rahi "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
