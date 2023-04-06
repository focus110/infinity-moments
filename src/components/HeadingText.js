import React from "react";
import Title from "./Title";

const HeadingText = ({ heading, rightText, desc }) => {
  return (
    <div className="wrapper mb-6 md:mb-8 space-y-1">
      <div className="flex justify-between items-end">
        <Title title={heading} />
        <button>
          <p className="underline font-gilroy font-black text-lg md:text-xl">
            {rightText}
          </p>
        </button>
      </div>
      <p className="text-base md:text-xl font-medium text-text-grey">{desc}</p>
    </div>
  );
};

export default HeadingText;
