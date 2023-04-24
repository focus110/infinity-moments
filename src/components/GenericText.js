import React from "react";
import { desc } from "./Data";

const GenericText = () => {
  return (
    <div className="mt-8 mb-4">
      {desc.map((item, i) => {
        return (
          <div key={i} className="mb-4">
            <h4 className="text-left font-black text-lg">{item.title}</h4>
            <p className="text-left">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GenericText;
