import React from "react";
import { ReactDOM } from "react";
import homeimage from "../assets/Home.jpg";

const Hero = () => {
  return (
    <>
      <div class="relative w-full h-screen">
        <img
          src={homeimage}
          class=" w-full h-full object-top object-cover brightness-50 "
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
