import React from "react";
import { ReactDOM } from "react";
import productimg from "../assets/Products-min.jpg";
import turmericpowder from "../assets/Turmeric Powder.jpg";
import blackturmeric from "../assets/black.jpg";
import finger from "../assets/finger.jpg";
const Products = () => {
  return (
    <>
      <div class="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <h1 className=" mt-10 text-transparent text-center md:text-4xl lg:text-7xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 font-bold">
          {" "}
          Our Products{" "}
        </h1>

        <div class=" mt-10 lg:mt-20 grid md:grid-cols-2 md:gap-7 md:content-between  w-full ">
          <img src={productimg} class="w-full rounded-lg shadow-lg " />

          <span class="w-full text-center sm:text-left mt-10 md:mt-0 space-y-2 text-sm md:text-sm lg:text-lg font-medium text-slate-500 ">
            {" "}
            <p>
              {" "}
              Turmeric is a perennial plant, which is found in the tropical
              regions of Southern Asia. We trade our turmeric in whole as well
              as powdered form, in accordance with need and demand from our
              clients.
            </p>{" "}
            <p>
              We have best quality of Indian Turmeric sourced from all corners
              of India. Our turmeric is polished and hand picked to avoid
              contamination and to remove low-grade fingers.
            </p>
            <p>
              We ensure that commodities of the highest quality are delivered to
              our customers. We understand the responsibility that comes with
              representing our country on the global scale and we take it very
              seriously.
            </p>
          </span>
        </div>
        <hr class="mt-10"></hr>
        <h2 class="mt-10 text-2xl font-bold text-center text-slate-700">
          Types of Turmeric we ship
        </h2>

        <div class="grid gap-4 mt-10 sm:grid-cols-3">
          <div>
            <div className=" relative w-full h-60 sm:h-full border-2 rounded-xl overflow-hidden  shadow-lg ">
<<<<<<< HEAD
              <span class=" brightness-75 ">
                {" "}
                <img src={turmericpowder} className="" />
              </span>
=======
              <img class=" brightness-50 " src={turmericpowder} className="" />
>>>>>>> 2af1f9bd65609f4b7ed84beb227225ea98e33ab1
              <h1 className=" absolute text-center text-white inset top-1/2 left-1/2 text-3xl md:text-2xl lg:text-4xl font-bold -translate-x-1/2 -translate-y-1/2 ">
                Turmeric Powder
              </h1>
            </div>
          </div>
          <div className=" relative w-full h-60 sm:h-full border-2 rounded-xl overflow-hidden  shadow-lg ">
<<<<<<< HEAD
            <span class="brightness-50">
              {" "}
              <img src={blackturmeric} className="" />{" "}
            </span>
=======
            <img class=" brightness-50 " src={blackturmeric} className="" />
>>>>>>> 2af1f9bd65609f4b7ed84beb227225ea98e33ab1
            <h1 className=" absolute text-center text-white inset top-1/2 left-1/2 text-3xl md:text-2xl lg:text-4xl font-bold -translate-x-1/2 -translate-y-1/2 ">
              Black Turmeric{" "}
            </h1>
          </div>
          <div className=" relative w-full h-60 sm:h-full border-2 rounded-xl overflow-hidden  shadow-lg ">
<<<<<<< HEAD
            <span class="brightness-75">
              <img src={finger} className="" />
            </span>
=======
            <img class=" brightness-50" src={finger} className="" />
>>>>>>> 2af1f9bd65609f4b7ed84beb227225ea98e33ab1
            <h1 className=" absolute text-center text-white inset top-1/2 left-1/2 text-3xl md:text-2xl lg:text-4xl font-bold -translate-x-1/2 -translate-y-1/2 ">
              Turmeric Fingers{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
