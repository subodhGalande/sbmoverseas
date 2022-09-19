import React from "react";
import { ReactDOM } from "react";

import heroimage from "../assets/Hero.png";
import { Popover } from "@headlessui/react";

const Hero = () => {
  return (
    <>
      <div class=" grid border-t-2 2xl:-mt-24 md:grid-cols-2 w-screen h-full ">
        <div class="col-auto lg:w-full flex flex-col md:items-start justify-center items-center bg-transparent px-4 md:px-8 2xl:px-12 ">
          <p className=" inline-block md:text-xs xl:text-lg pl-1 lg:text-sm mt-10 xl:pl-2 text-sm tracking-widest  text-slate-500 font-light  ">
            Hey there and welcome to{" "}
          </p>

          <h1 className="inline-block text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 lg:text-[7rem] xl:text-8xl font-serif  md:text-7xl md:text-left text-center font-bold">
            SBM Overseas
          </h1>
          <p className="inline-block leading-tight text-slate-600 text-lg md:text-md xl:text-2xl text-center md:text-left mt-8 md:mt-6 pl-1 lg:mt-10 font-medium">
            SBM Overseas is one of the most prominent names in the Turmeric
            market of Madhya Pradesh.
          </p>
          <button class=" animate-bounce mt-8 bg-gradient-to-tr from-blue-600  to-blue-400 text-white px-3 py-1 rounded-md ">
            Contact Us
          </button>
        </div>
        <div className="-mt-5 flex justify-center items-center ">
          <img
            src={heroimage}
            className=" h-full w-full md:h-[22rem] lg:h-[20rem] xl:h-[40rem] lg:object-right object-cover "
            alt=""
          />
        </div>
      </div>
      <div class="w-screen h-max mt-12 bg-gradient-to-tr from-blue-600  to-blue-400 px-4 md:px-8 2xl:px-12">
        <p className=" text-center mx-auto  py-4 max-w-7xl text-white text-sm md:text-sm xl:text-lg   lg:text-base lg:mt-10 font-medium">
          The activities of the company consist mainly Turmeric trading,
          Turmeric commission agents, Turmeric processing and packaging. The
          company is one of the major suppliers to Indian exporters for the
          finest quality of Turmeric
        </p>
      </div>
    </>
  );
};

export default Hero;
