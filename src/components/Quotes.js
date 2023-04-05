import React from "react";
import Title from "./Title";

const Quotes = () => {
  return (
    <div className="wrapper py-4">
      <div className="flex justify-between items-end py-6">
        <Title title="Quotes" />
        <button>
          <p className="underline font-medium text-lg md:text-xl">Edit</p>
        </button>
      </div>
    </div>
  );
};

export default Quotes;
