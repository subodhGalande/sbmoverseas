import React from "react";
import { ReactDOM } from "react";
import homeimage from "../assets/Home.jpg";
import heroimage from "../assets/Hero.png";
import { Popover } from "@headlessui/react";

const Hero = () => {
  return (
    <>
      <div class=" grid lg:grid-cols-2 w-screen h-screen content-center">
        <div class=" col-auto flex flex-col  justify-center items-start px-12 ">
          <p className=" inline-block pb-1 pl-1 tracking-widest text font-sans text-base text-left ">
            Hey there and welcome to{" "}
          </p>
          <h1 className="inline-block text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-normal font-serif text-left text-8xl font-bold">
            SBM Overseas
          </h1>
          <p className="inline-block text-slate-600 text-lg mt-10 font-medium">
            SBM Overseas is one of the most prominent names in the Turmeric
            market of Madhya Pradesh. The activities of the company consist
            mainly Turmeric trading, Turmeric commission agents, Turmeric
            processing and packaging. The company is one of the major suppliers
            to Indian exporters for the finest quality of Turmeric
          </p>
          <button className="inline-block bg-blue mt-10">Contact Us</button>
        </div>
        <div className=" col-auto h-screen w-full  flex justify-center items-center ">
          <img
            src={heroimage}
            className=" object-cover object-right h-full w-screen"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
