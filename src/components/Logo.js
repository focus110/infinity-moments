import React from "react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/logo-white.png";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  if (color === "white") {
    return (
      <Link to="/">
        <img className="w-14" src={whiteLogo} alt="!#" />
      </Link>
    );
  }
  return (
    <Link to="/">
      <img className="w-14" src={logo} alt="!#" />
    </Link>
  );
};

export default Logo;
