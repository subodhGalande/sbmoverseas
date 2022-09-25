import React from "react";
import { ReactDOM } from "react";
import factory from "../assets/factory.png";

const About = () => {
  return (
    <>
      <div class="container mx-auto max-w-5/6 mt-20 lg:mt-28 px-4 md:px-8 lg:px-12">
        <h1 className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  lg:text-6xl font-serif tracking-wide md:text-5xl text-center ">
          About Us
        </h1>

        <h3 className=" text-center leading-tight text-slate-600 text-lg md:text-md xl:text-2xl mt-8 md:mt-5 lg:mt-4 font-bold">
          <em class="text-semibold">SBM Overseas </em>is having its own roots at
          all stages results in competitive price and quality excellence.
        </h3>
        <div class="container mx-auto w-full h-full sm:space-x-10 mt-5 lg:w-4/5 ">
          <div class=" space-y-3  text-slate-500 text-base md:text-sm xl:text-xl text-center lg:text-base mt-10 lg:mt-12 font-medium">
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

        <div class="w-full h-full">
          <h1 className=" font-extrabold text-transparent text-3xl bg-clip-text mt-20 sm:mt-32 lg:text-5xl font-sans tracking-wide md:text-5xl text-slate-600 text-center ">
            Processing Facility
          </h1>

          <img
            src={factory}
            alt=""
            className="lg:mt-16 mt-10 rounded-md w-full sm:w-1/2 mx-auto "
          />

          <div className=" max-w-7xl mx-auto  space-y-3  text-slate-500 text-base md:text-sm xl:text-xl text-center lg:text-base mt-10 lg:mt-12 font-medium">
            <p>
              {" "}
              Upon harvest, we receive crops from our organic farms for
              processing in our certified facilities, where we process and
              package while following global standards. Our company adheres to
              strict Food Safety regulations and processes. Our state-of-art
              machinery undertaking various production processes, enabling us to
              give finished products adhering to the required international
              quality standards with competitive pricing.
            </p>
            <p>
              {" "}
              Apart from this we also have strong ties with our suppliers, who
              themselves have several years of experience and their factories
              are solely occupied with serving quality products to us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
