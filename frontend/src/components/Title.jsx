import React from "react";

const Title = ({ title, titleTwo, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center ">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl text-[#707070]">
          {title}

          <span className="ml-2 text-3xl sm:text-4xl font-semibold text-[#343434]">
            {titleTwo}
          </span>
        </p>
        <div className="mt-2 w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 rounded-full"></div>
      </div>
      {description && (
        <div>
          <p className="text-base sm:text-lg text-[#868686] ">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Title;
