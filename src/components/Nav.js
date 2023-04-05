import React from "react";
import Logo from "./Logo";
import img1 from "../assets/profile-Img.png";

const Nav = () => {
  return (
    <div className="wrapper py-6 flex justify-between items-center">
      <Logo />
      <button className="w-10 h-10">
        <img src={img1} alt="!#" />
      </button>
    </div>
  );
};

export default Nav;
