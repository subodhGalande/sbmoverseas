import React from "react";
import { ReactDOM } from "react";
import About from "./about";
import apeda from "../assets/apeda.png";
import dgft from "../assets/dgft.png";
import fieo from "../assets/fieo.png";
import fssai from "../assets/fssai.png";
import iso from "../assets/iso.png";
import msme from "../assets/msme.png";
import spice from "../assets/spice.jpg";
import tree from "../assets/tree.svg";
import quality from "../assets/quality.svg";
import supply from "../assets/supply.svg";
import why from "../assets/why.png";

import Hero from "./hero";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="mx-auto mt-16 lg:mt-20 px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl lg:text-6xl text-center font-serif text-slate-600 font-black  ">
          {" "}
          Why Choose Us?{" "}
        </h1>
        <div class="sm:flex lg:mt-0 mt-14 items-center">
          <div className=" w-full ">
            <ul class="flex flex-col">
              <li class="flex gap-4 pb-8 lg:pb-14 ">
                <span class="inline-block">
                  <img
                    src={tree}
                    className=" h-16 w-16 lg:h-20 lg:w-20 "
                    alt=""
                  />
                </span>{" "}
                <span class="inline-block w-full ">
                  <h1 class=" text-lg lg:text-2xl font-bold text-slate-700 ">
                    Naturally Sourced
                  </h1>
                  <p className="text-sm lg:text-lg font-normal mt-2 text-slate-600 ">
                    We source our Turmeric with the highest standards in natural
                    and fair trade agriculture. Hence our products are enriched
                    with natural flavour and aroma.
                  </p>
                </span>{" "}
              </li>
              <li class="flex gap-4 ">
                <span class="inline-block">
                  <img
                    src={quality}
                    className=" h-16 w-16 lg:h-20 lg:w-20 "
                    alt=""
                  />
                </span>{" "}
                <span class="inline-block w-full ">
                  <h1 class=" text-lg lg:text-2xl font-bold text-slate-700 ">
                    Assured Quality
                  </h1>
                  <p className="text-sm lg:text-lg font-normal mt-2 text-slate-600 ">
                    Our goal is to deliver a great product and fantastic
                    customer service. Talk us if we don't meet your
                    expectations.
                  </p>
                </span>{" "}
              </li>{" "}
              <li class="flex gap-4 pt-8 lg:pt-14">
                <span class="inline-block">
                  <img
                    src={supply}
                    className=" h-16 w-16 lg:h-20 lg:w-20 "
                    alt=""
                  />
                </span>{" "}
                <span class="inline-block w-full ">
                  <h1 class=" text-lg lg:text-2xl font-bold text-slate-700 ">
                    Consistent Supply
                  </h1>
                  <p className="text-sm lg:text-lg font-normal mt-2 text-slate-600 ">
                    We have wide network from different Turmeric producing
                    centres, as well as due to our transparent business policies
                    and rich vendor base, we provide on-time delivery of
                    consignment.
                  </p>
                </span>{" "}
              </li>
            </ul>
          </div>
          <div class="w-full">
            <span>
              <img src={why} alt="" />
            </span>
          </div>
        </div>
      </section>

      <h2 className=" mt-20 lg:mt-32 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  lg:text-6xl font-sans md:text-5xl text-center">
        {" "}
        Certifications{" "}
      </h2>
      <ul className=" mt-12 sm:-ml-5  flex flex-col md:flex-row md:items-baseline space-y-8 md:space-x-8 md:space-y-0 ">
        <li>
          <img
            src={apeda}
            class=" inline-block h-auto w-5/6 md:w-[90rem] md:h-auto "
            alt=""
          />
        </li>
        <li>
          <img
            src={dgft}
            alt=""
            class="   inline-block h-auto w-3/5  md:w-screen md:h-auto "
          />
        </li>
        <li>
          <img
            src={fssai}
            alt=""
            class="   inline-block h-auto w-3/5  md:w-screen md:h-auto "
          />
        </li>
        <li>
          <img
            src={iso}
            alt=""
            class="  inline-block h-auto w-1/3 md:w-screen md:h-auto  "
          />
        </li>
        <li>
          <img
            src={msme}
            alt=""
            class="  inline-block h-auto w-3/5 md:w-screen md:h-auto "
          />
        </li>
        <li>
          <img
            src={spice}
            alt=""
            class="  inline-block h-auto w-3/5 md:w-screen md:h-auto "
          />
        </li>{" "}
        <li>
          <img
            src={fieo}
            alt=""
            class="  inline-block h-auto w-3/5 md:w-[80rem] md:h-auto "
          />
        </li>
      </ul>
    </>
  );
};

export default Home;
