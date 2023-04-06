import React from "react";
import Title from "./Title";
import img3 from "../assets/img3.png";

const Quotes = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-between items-end py-6">
        <Title title="Quotes" />
        <button>
          <p className="underline font-medium text-lg md:text-xl">Edit</p>
        </button>
      </div>

      <div className="relative bg-[#ffe1e1] flex items-center space-x-4 mb-8 rounded-[13px] p-4 md:p-6 px-8">
        <div className="absolute left-0 -bottom-[70px] -z-10 triangle"></div>
        <img
          className="w-20 h-20 rounded-full border-4 border-white"
          src={img3}
          alt="!#"
        />
        <div>
          <h2 className="md:text-xl">
            Lorem ipsum dolor sit amet, consec adipiscing elit Florian B.
          </h2>
          <p className="text-sm md:text-base text-[#666666]">Florian B.</p>
        </div>
      </div>

      <div className="relative bg-[#f8f8f8] flex items-center space-x-4 rounded-[13px] p-4 px-8">
        <div className="absolute right-0 -bottom-[25px] -z-10 triangle__white"></div>

        <div>
          <h2 className="md:text-xl">
            Lorem ipsum dolor sit amet, consec adipiscing elit. Sandra D.
          </h2>
          <p className="text-sm md:text-base text-[#666666]">Sandra D.</p>
        </div>

        <img
          className="w-20 h-20 rounded-full border-4 border-white"
          src={img3}
          alt="!#"
        />
      </div>
    </div>
  );
};

export default Quotes;
