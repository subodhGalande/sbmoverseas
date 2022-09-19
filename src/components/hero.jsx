import React from "react";
import { ReactDOM } from "react";
import homeimage from "../assets/Home.jpg";
import heroimage from "../assets/Hero.png";
import { Popover } from "@headlessui/react";

const Hero = () => {
  return (
    <>
      <div class=" grid 2xl:-mt-24 md:grid-cols-2 w-screen h-full ">
        <div class=" col-auto lg:w-full flex flex-col md:items-start justify-center items-center bg-transparent px-4 md:px-8 2xl:px-12 ">
          <p className=" inline-block md:text-xs xl:text-base pl-1 lg:text-sm mt-10 text-sm tracking-widest text-slate-400 font-sans   ">
            Hey there and welcome to{" "}
          </p>
          <h1 className="inline-block text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400  font-serif  md:text-8xl md:text-left text-center font-bold">
            SBM Overseas
          </h1>
          <p className="inline-block text-slate-600 text-base md:text-xs xl:text-md text-center md:text-left lg:text-base mt-6 lg:mt-10 font-medium">
            SBM Overseas is one of the most prominent names in the Turmeric
            market of Madhya Pradesh. The activities of the company consist
            mainly Turmeric trading, Turmeric commission agents, Turmeric
            processing and packaging. The company is one of the major suppliers
            to Indian exporters for the finest quality of Turmeric
          </p>
        </div>
        <div className=" col-auto 2xl:h-screen 2xl:w-full -mt-5 flex justify-center items-center ">
          <img
            src={heroimage}
            className=" object-cover object-right  2xl:h-full 2xl:w-screen"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
