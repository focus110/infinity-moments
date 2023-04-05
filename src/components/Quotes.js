import React from "react";
import Title from "./Title";

const Quotes = () => {
  return (
    <div className="px-4 md:px-96 py-4">
      <div className="flex justify-between items-end py-6">
        <Title title="Quotes" />
        <button>
          <p className="underline font-medium text-lg">Edit</p>
        </button>
      </div>
    </div>
  );
};

export default Quotes;
