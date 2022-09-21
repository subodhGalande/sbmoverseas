import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <h1 className=" mt-10 text-transparent text-center md:text-4xl lg:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 font-bold">
        {" "}
        Love to hear from you <br /> Get in touch.{" "}
      </h1>
      <div className=" grid container mt-10 mx-auto px-4 md:px-8 lg:px-12">
        <div className="mx-auto text-center">
          <h2 class="font-sans font-semibold mt-4 text-xl text-slate-600">
            SBM Overseas
          </h2>

          <ul className=" flex flex-col justify-start space-y-5 font-medium mt-5 ">
            <li class="flex justify-start items-center  text-left ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class=" w-6 h-6 inline-block text-blue-400 "
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>

              <p className=" text-sm w-fit ml-3 inline-block text-slate-700 ">
                Corporate Office- LG- 30 Mangal City Mall, Vijay Nagar, Indore
                (M.P.) - 452010
              </p>
            </li>
            <li class="flex justify-start items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 inline-block text-blue-400"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <p className="text-sm w-fit ml-3 inline-block text-slate-700">
                info@sbmoverseas.com
              </p>
            </li>
            <li class="flex justify-start items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block text-blue-400"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-sm w-fit ml-3 inline-block text-slate-700">
                +91-7415127542
              </p>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-10 border">
          <h1 className="font-sans font-semibold mt-4 text-xl text-slate-600">
            Enquire Now
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
