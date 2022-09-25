import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/Hero.png";
import { Popover } from "@headlessui/react";
import brochure from "../assets/Brochure.pdf";

const Hero = () => {
  return (
    <>
      <div class=" grid border-t-2  md:grid-cols-2 w-screen h-full ">
        <div class="col-auto lg:w-full flex flex-col md:items-start justify-center items-center bg-transparent px-4 md:px-8 2xl:px-12 ">
          <h1 className="inline-block mt-10  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 lg:text-[7rem] xl:text-8xl font-serif  md:text-7xl md:text-left text-center font-black">
            Be it any industry
          </h1>
          <p className="inline-block leading-tight text-slate-600 text-lg md:text-md xl:text-2xl text-center md:text-left mt-8 md:mt-6 pl-1 lg:mt-10 font-medium">
            SBM Overseas provides 100% authentic Indian Turmeric for your any
            need.
          </p>
          <a href={brochure} download>
            <button class=" animate-bounce font-medium mt-8 lg:text-lg bg-gradient-to-tr from-blue-600  to-blue-400 text-white px-3 py-1 rounded-md ">
              Brochure
            </button>
          </a>
        </div>
        <div className="-mt-5 flex justify-center items-center ">
          <img
            src={heroimage}
            className=" h-full w-full md:h-[22rem] lg:h-[20rem] xl:h-[40rem] lg:object-right object-cover "
            alt=""
          />
        </div>
      </div>
      <div class="w-full text-center text-white h-max mt-12 bg-gradient-to-tr from-blue-600  to-blue-400 px-4 md:px-8 2xl:px-12">
        <h2 className="text-center tracking-widest font-light text-xl lg:text-2xl pt-10">
          WELCOME TO
        </h2>
        <h1 className="text-center text-5xl lg:text-6xl tracking-wide pt-2 font-serif font-black">
          SBM Overseas
        </h1>

        <p className="text-center text-xl py-10">
          SBM Overseas is one of the most prominent names in the Turmeric market
          of Madhya Pradesh. The activities of the company consist mainly
          Turmeric trading, Turmeric commission agents, Turmeric processing and
          packaging. The company is one of the major suppliers to Indian
          exporters for the finest quality of Turmeric. Read More
        </p>

        <Link to="/about">
          <button className=" mb-10 px-3 py-2 lg:px-4 lg:py-3 bg-white rounded-full text-blue-400 font-bold hover:scale-105 ">
            {" "}
            Read More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
