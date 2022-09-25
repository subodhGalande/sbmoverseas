import React from "react";
import sbm from "../assets/SBM.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class=" mt-20 border-t-2">
        <div class=" mx-auto flex flex-col sm:flex-row sm:justify-between px-4 max-w-7xl ">
          <div className="mt-10 sm:w-1/2 lg:w-1/3">
            <img
              src={sbm}
              className="h-12 sm:h-16 lg:h-20 mx-auto sm:mx-0 "
              alt=""
            />
            <p className="text-sm sm:text-left text-center lg:text-lg text-slate-800 pt-3 lg:pt-5">
              We are dedicated and one stop solution for the exportation and
              marketing of pure quality Turmeric around the Globe.{" "}
            </p>
            <p className="text-sm sm:text-left text-center font-medium text-slate-800 pt-3 lg:text-lg ">
              Copyright © 2022 SBM Overseas
            </p>
          </div>
          <div className=" mt-5 sm:mt-10 space-x-4 sm:space-x-0 font-medium sm:flex lg:text-lg sm:flex-col text-slate-500 mx-auto sm:mx-0">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Products</Link>
            <Link>Contact Us</Link>
          </div>
          <div className=" my-5 sm:mt-10  mx-auto sm:mx-0">
            <p className="text-center sm:text-right lg:text-lg text-slate-900 text-md">
              To know more, drop a line at <br /> <b>info@sbmoverseas.com</b>{" "}
              <hr class="my-2" /> Or call us on <br />
              <b> +91 74151 27542</b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
