import React from "react";
import heroImg from "../assets/hero-Img.png";
import profileImg from "../assets/profile-Img.png";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="px-4 md:px-96 relative">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-between">
        <div>
          <img className="" src={profileImg} alt="!#" />
          <p className="text-white">Florian B.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <p className="text-white">11th Jan, 2021</p>
          <div>
            <Logo color="white" />
          </div>
          <p className="text-white">773 days together</p>
        </div>

        <div>
          <img className="" src={profileImg} alt="!#" />
          <p className="text-white">Sandra J.</p>
        </div>
      </div>

      <img className="w-full rounded-2xl" src={heroImg} alt="!#" />
    </div>
  );
};

export default Hero;
