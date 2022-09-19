import React from "react";
import { ReactDOM } from "react";

const About = () => {
  return (
    <>
      <div class="container mx-auto max-w-5/6 mt-20 px-4 md:px-8 lg:px-12">
        <h1 className=" mx-auto font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  lg:text-7xl font-serif md:text-5xl text-center ">
          About Us
        </h1>

        <h3 className=" text-center  mx-auto  leading-tight text-slate-600 text-lg md:text-md xl:text-2xl mt-8 md:mt-6 lg:mt-5 font-bold">
          <em class="text-semibold">SBM Overseas </em>is having its own roots at
          all stages results in competitive price and quality excellence.
        </h3>
        <div class="container mx-auto w-full h-full sm:space-x-10 mt-5 lg:w-4/5 ">
          <div class=" space-y-3  text-slate-500 text-base md:text-sm xl:text-lg text-center lg:text-base mt-10 lg:mt-10 font-medium">
            <p>
              The company is having all in one roof facility i. e. trading,
              processing, storing, local transportation etc. helps to cut cost
              and value to its product. The all in one roof facility helps it to
              attain core competence in the market.
            </p>
            <p>
              The company is backed by solid Information Technology and using
              High Tech ERP systems to monitor the whole process at all stages,
              which in turn reduces errors and results in smooth operations
            </p>
            <p>
              The group has appointed professionals like Chartered Accountants,
              Engineers, marketing and administration professionals, to look
              after the various activities and strategic planning.
            </p>
            <p>
              Keeping strictly to its policy of clarity and transparency with
              the buyers and very strict quality controls on the supply side,
              the Company has grown in terms of its geographical reach as well
              as the range of products that it exports.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
