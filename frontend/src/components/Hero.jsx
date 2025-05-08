import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-10 border-1 border-t-0">
      <div className="w-full sm:w-1/2 flex items-center sm:justify-center ml-10 mt-5 lg:ml-0 sm:mt-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#484848] w-8 sm:w-11 h-[1px] sm:h-[2px] rounded-full"></div>
            <p className="font-medium text-base sm:text-lg text-[#414141] ">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl prata-regular text-[#414141]">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-base sm:text-lg text-[#414141] ">
              SHOP NOW
            </p>
            <div className="bg-[#484848] w-8 sm:w-11 h-[1px] sm:h-[2px] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
