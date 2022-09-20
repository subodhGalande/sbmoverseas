import React from "react";
import sbm from "../assets/SBM.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font mt-20 border-t-2">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={sbm} className="h-10" alt="" />
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 SBM Overseas | All rights reserved
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center font-medium space-x-4 sm:justify-start">
            <Link to="/">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Contact">Contact Us</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
