import React from "react";
import img1 from "../assets/img1.png";

const FeaturedPhoto = () => {
  return (
    <div className="px-4 md:px-96 py-4">
      <div className="flex justify-center items-end">
        <h2 className="text-black text-xl font-bold">Featured Photo</h2>
        <p className="underline">Upload Photo</p>
      </div>
      <img className="w-full" src={img1} alt="!#" />
    </div>
  );
};

export default FeaturedPhoto;
