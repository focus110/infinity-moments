import React from "react";
import Logo from "./Logo";
import img1 from "../assets/profile-Img.png";

const Nav = () => {
  return (
    <div className="px-4 md:px-96 py-4 flex justify-between items-center bg-red-500">
      <Logo />
      <img src={img1} alt="!#" />
    </div>
  );
};

export default Nav;
