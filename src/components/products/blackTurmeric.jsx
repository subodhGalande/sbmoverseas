import React from "react";
import black from "../../assets/black.jpg";
import { Link } from "react-router-dom";
const BlackTurmeric = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        <h1 className=" mt-10 text-transparent text-center md:text-4xl lg:text-7xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 font-bold">
          Black Turmeric
        </h1>
        <div className=" mx-auto flex flex-col sm:flex-row justify-center mt-10 lg:mt-20 gap-8  ">
          <div class="rounded-lg overflow-hidden lg:w-1/3">
            <img src={black} alt="" className=" object-cover w-full " />

            <Link to="/contact">
              <button class="mt-3 font-medium rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white p-2 w-full">
                Enquire Now
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 ">
            <p class="  text-center sm:text-left mt-2 md:mt-0 space-y-2 text-md md:text-sm lg:text-lg font-medium text-slate-600">
              Black turmeric is a rare herb. It is the underground portion of
              the stem, or rhizome, of the Cucurma caesia plant. Black turmeric
              offers benefits similar to the orange variety, but the darker
              cultivar contains higher concentrations of curcumin than any other
              Curcuma species.
            </p>
            <p class="  text-center sm:text-left mt-2 md:mt-0 space-y-2 text-md md:text-sm lg:text-lg font-medium text-slate-600">
              Black Turmeric is a powerful antioxidant and anti-inflammatory. It
              has anti-bacterial and anti-fungal properties, and is laxative. It
              is used as a tonic for the brain and the heart. Furthermore, the
              smooth muscle relaxant, anti-tumour and anti-oxidant properties of
              Curcuma Caesia rhizome extract had been reported.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackTurmeric;
