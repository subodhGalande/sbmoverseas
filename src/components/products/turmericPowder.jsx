import React from "react";
import powder from "../../assets/Turmeric Powder.jpg";
import { Link } from "react-router-dom";

const TurmericPowder = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        {" "}
        <h1 className=" mt-10 text-transparent text-center md:text-4xl lg:text-7xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 font-bold">
          Turmeric Powder
        </h1>
        <div className=" mx-auto flex flex-col sm:flex-row justify-center mt-10 lg:mt-20 gap-8  ">
          <div class="rounded-lg overflow-hidden lg:w-1/3">
            <img src={powder} alt="" className=" object-cover w-full " />

            <Link to="/contact">
              <button class="mt-3 font-medium rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white p-2 w-full">
                Enquire Now
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 ">
            <p class="  text-center sm:text-left mt-2 md:mt-0 space-y-2 text-md md:text-sm lg:text-lg font-medium text-slate-600">
              We supply the best quality of Turmeric Powder from India. We are
              instrumental in offering a wide range of turmeric powder of
              different curcumin content ranging from 2.0% to 5.0% to our
              valuable customers.{" "}
            </p>
            <p class="  text-center sm:text-left mt-2 md:mt-2 space-y-2 text-md md:text-sm lg:text-lg font-medium text-slate-600">
              The offered products are processed using premium quality
              ingredients and sophisticated technology as per the set industry
              norms under utmost hygienic conditions.
            </p>
            <p class="  text-center sm:text-left mt-2 md:mt-2 space-y-2 text-md md:text-sm lg:text-lg font-medium text-slate-600">
              Appreciated among our esteemed clients for their scrumptious
              flavor, purity and optimum quality, these are highly demanded in
              the national market. We offer these products in various packaging
              options and at the most affordable price range in order to gain
              maximum satisfaction of clients.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-20 mx-auto w-5/6 ">
          <table class="w-full table-fixed border-2">
            <thead class="border-b">
              <tr>
                <th
                  colSpan={2}
                  class="text-lg lg:text-2xl text-center font-bold tracking-wide text-slate-600 px-6 py-4 "
                >
                  Product Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-6 lg:text-lg py-4 whitespace-nowrap text-sm font-medium text-slate-600">
                  Product
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  Turmeric Powder
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 lg:text-lg py-4 whitespace-nowrap text-sm font-medium text-slate-600">
                  Origin
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  India
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Curcumin content
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  2.5 - 5%
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Moisture
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  7% Max
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Ash
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  6.5% Max
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Ash Insoluble
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  1% Max
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Chromate test
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  Negative
                </td>
              </tr>{" "}
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Storage
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  Cool Dry Place
                </td>
              </tr>{" "}
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Shelf life
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-pre-wrap">
                  2 years depending upon storage Conditions
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-nowrap text-sm font-medium text-slate-600">
                  Turmeric Powder
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal whitespace-pre-wrap px-6 py-4 ">
                  HDPE, Paper Bags 10 kgs, 20 kgs, 25 kgs / Customizable
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 lg:text-lg whitespace-pre-wrap text-sm font-medium text-slate-600">
                  Loading
                </td>
                <td class="text-sm lg:text-lg text-slate-600 font-normal px-6 py-4 whitespace-nowrap">
                  18.5 MTN in 20 FT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TurmericPowder;
