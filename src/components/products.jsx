import React from "react";
import { ReactDOM } from "react";
import productimg from "../assets/Products.jpg";

const Products = () => {
  return (
    <>
      <div class="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <h1 className=" mt-10 text-transparent text-center md:text-4xl lg:text-7xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 font-bold">
          {" "}
          Our Products{" "}
        </h1>

        <div class=" mt-10 grid md:grid-cols-2 md:gap-7 md:content-between  w-full ">
          <img src={productimg} class="w-full rounded-lg shadow-lg " />

          <span class="w-full mt-10 md:mt-0 space-y-2 text-sm md:text-sm font-medium text-slate-600 ">
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
      </div>
    </>
  );
};

export default Products;
