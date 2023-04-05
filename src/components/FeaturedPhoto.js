import React from "react";
import img1 from "../assets/img1.png";
import Title from "../components/Title";

const FeaturedPhoto = () => {
  return (
    <div className="wrapper py-4">
      <div className="flex justify-between items-end py-6">
        <Title title="Featured Photo" />
        <p className="underline font-medium text-lg">Upload Photo</p>
      </div>
      <div className="relative">
        <h2 className="absolute left-8 bottom-8 text-white font-fragille text-2xl">
          Florian and <br /> Sandra - The tale <br /> of an eternity.
        </h2>
        <img className="w-full" src={img1} alt="!#" />
      </div>
    </div>
  );
};

export default FeaturedPhoto;
