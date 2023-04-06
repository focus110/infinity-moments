import React from "react";

const AddSection = () => {
  return (
    <button className="w-[80%] md:w-[300px] mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span> Add a new section</span>
    </button>
  );
};

export default AddSection;
