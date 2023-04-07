import React, { useState } from "react";
import Title from "../Title";

const EditQuotes = ({ isOverlayOpen, editQuote, handleEditQuote }) => {
  const [quotes, setQuotes] = useState({});

  const onChange = (e) => {
    setQuotes(...quotes, { [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    handleEditQuote();
    isOverlayOpen();
  };

  if (!editQuote) {
    return null;
  }
  return (
    <div className="wrapper fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50">
      <div className="w-full flex flex-col justify-center space-y-3  bg-white p-8 rounded-2xl top__fade__ani">
        <div className="flex justify-between items-center">
          <Title title="Edit Quotes" />
          <button onClick={handleClose} className="outline-none">
            <svg
              className="w-[40px] h-[40px] outline-none"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24.7488"
                cy="24.7487"
                r="17.5"
                transform="rotate(45 24.7488 24.7487)"
                fill="black"
              />
              <rect
                x="19.2122"
                y="18.101"
                width="17.1429"
                height="1.71429"
                rx="0.857143"
                transform="rotate(45 19.2122 18.101)"
                fill="white"
              />
              <rect
                x="31.4349"
                y="19.2122"
                width="17.1429"
                height="1.71429"
                rx="0.857143"
                transform="rotate(135 31.4349 19.2122)"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <form className="flex flex-col space-y-3">
          <label htmlFor="florians" className="font-black">
            Florian's quote
          </label>
          <textarea
            name="florians"
            className="w-full h-32 border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
            type="text"
            placeholder="Paste the spotify URL"
            value={quotes?.florians}
            onChange={onChange}
          />

          <label htmlFor="sandra" className="font-black">
            Sandra's quote
          </label>
          <textarea
            name="sandra"
            className="w-full h-32 border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
            type="text"
            placeholder="Paste the spotify URL"
            value={quotes?.florians}
            onChange={onChange}
          />
        </form>
        <button className="w-full mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default EditQuotes;
