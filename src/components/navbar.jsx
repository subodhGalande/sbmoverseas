import React from "react";
import { ReactDOM } from "react";
import sbmlogo from "../assets/SBM.png";
import { Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header class=" bg-white pb-3">
        <nav class="w-screen pt-7 ">
          <div class="flex mx-auto justify-between px-4 sm:px-8 lg:px-12">
            <img src={sbmlogo} class="inline-block h-10" alt="" />
            <ul class=" hidden sm:flex space-x-4">
              <li class="inline-block">Home</li>
              <li class="inline-block">Products</li>
              <li class="inline-block">Contact Us</li>
            </ul>
            <div class="sm:hidden">
              <Popover className="sm:hidden text-slate-900 py-1 px-2 rounded-md ring-1 ring-zinc-500/40 ">
                <Popover.Button>
                  {" "}
                  <GiHamburgerMenu />{" "}
                </Popover.Button>

                <Popover.Panel className="absolute z-10">
                  <div class="fixed grid inset-x-4 top-7 z-50 origin-top rounded-md p-8 ring-1 ring-zinc-500/40 bg-white opacity-100 scale-100">
                    {" "}
                    <div class="flex flex-row justify-between">
                      <h6 class="inline-block text-slate-600">Menu</h6>
                      <Popover.Button
                        class="inline-block"
                        aria-label="Close menu"
                        type="button"
                        data-headlessui-state="open"
                        tabindex="0"
                      >
                        {" "}
                        <MdClose />
                      </Popover.Button>
                    </div>
                    <ul class=" mt-4 divide-y font-sans text-base font-normal text-slate-900 divide-zinc-500/40 ">
                      <li>
                        {" "}
                        <Popover.Button class="pt-3 pb-2">About</Popover.Button>
                      </li>
                      <li>
                        <Popover.Button class="pt-3 pb-2">
                          Products
                        </Popover.Button>
                      </li>
                      <li>
                        <Popover.Button class="pt-3 pb-2">
                          Contact Us
                        </Popover.Button>
                      </li>
                    </ul>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
