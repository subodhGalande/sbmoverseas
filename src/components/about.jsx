import React from "react";
import { ReactDOM } from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <>
      <section class="mt-32 px-4 md:px-8 2xl:px-12">
        <h1 className=" mx-auto text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 lg:text-7xl font-serif  md:text-8xl md:text-left text-center font-bold">
          About Us
        </h1>
        <div class="flex flex-col mt-8 ">
          {/* <div class="inline-block mx-auto h-48 w-48 ">
            <img src={about} alt="" />
          </div> */}
          <div class="inline-block space-y-3  text-slate-600 text-base md:text-xs xl:text-lg text-center md:text-left lg:text-base mt-6 lg:mt-10 font-medium">
            <p>
              The company is having its own roots at all stages results in
              competitive price and quality excellence. The company is having
              all in one roof facility i. e. trading, processing, storing, local
              transportation etc. helps to cut cost and value to its product.
              The all in one roof facility helps it to attain core competence in
              the market.
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
      </section>
    </>
  );
};

export default About;
