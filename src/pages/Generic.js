import React from "react";
import Title from "../components/Title";
import GenericText from "../components/GenericText";
import CartIcon from "../components/CartIcon";
import logo from "../assets/logo.png";

const Generic = () => {
  return (
    <div className="bg-white">
      <img className="w-20 mx-auto py-10 md:py-16" src={logo} alt="!#" />

      <div className="wrapper mx-auto text-center shadow__style p-8 rounded-3xl">
        <CartIcon />
        <Title title="A generic screen" />
        <GenericText />
      </div>

      <button className="wrapper absolute left-[50%] -translate-x-[50%] bottom-0 mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
        <span>Continue</span>
      </button>
    </div>
  );
};

export default Generic;
