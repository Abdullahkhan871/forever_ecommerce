import React from "react";
import { assets } from "../assets/assets";
const Assurence = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around text-center my-20 gap-10 sm:gap-0">
      <div className="flex flex-col items-center gap-4">
        <div>
          <img className="w-13" src={assets.quality_icon} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-[#373737] font-semibold sm:text-lg">
            Easy Exchange Policy
          </h5>
          <p className="text-[#898989] sm:text-lg ">
            We offer hassle free exchange policy
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <img className="w-13" src={assets.quality_icon} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-[#373737] font-semibold sm:text-lg">
            7 Days Return Policy
          </h5>
          <p className="text-[#898989] sm:text-lg ">
            We provide 7 days free return policy
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <img className="w-13" src={assets.quality_icon} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-[#373737] font-semibold sm:text-lg">
            Best customer support
          </h5>
          <p className="text-[#898989] sm:text-lg ">
            we provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assurence;
