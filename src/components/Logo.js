import React from "react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/logo-white.png";

const Logo = ({ color }) => {
  if (color === "white") {
    return <img src={whiteLogo} alt="!#" />;
  }
  return <img src={logo} alt="!#" />;
};

export default Logo;
