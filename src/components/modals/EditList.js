import React, { useState } from "react";
import Title from "../Title";
import { bucketList } from "../Data";

const EditList = ({ isOverlayOpen, editList, handleEditList }) => {
  const [list, setList] = useState(bucketList);

  const onChange = (e) => {
    setList(e.target.value);
  };

  const handleClose = () => {
    handleEditList();
    isOverlayOpen();
  };

  if (!editList) {
    return null;
  }

  return (
    <div className="wrapper fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50">
      <div className="w-full flex flex-col justify-center space-y-3  bg-white p-8 rounded-2xl top__fade__ani">
        <div className="flex justify-between items-center">
          <Title title="Edit List" />
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

        <input
          className="border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
          type="text"
          placeholder="Paste the spotify URL"
          //   value={list}
          onChange={onChange}
        />

        <p className="font-bold text-lg md:text-xl">Your List</p>

        {list.map((item, i) => {
          return (
            <div key={i} class="flex justify-center items-center">
              <p className={` text-base md:text-xl font-medium `}>
                {item.title}
              </p>
              <button className="">
                <svg
                  className="w-[22px] h-[22px]"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.81625 13.7123L1.5 4.5H13.5L12.1838 13.7123C12.1327 14.0697 11.9544 14.3967 11.6816 14.6332C11.4088 14.8698 11.0598 15 10.6987 15H4.30125C3.94018 15 3.59122 14.8698 3.31843 14.6332C3.04565 14.3967 2.86734 14.0697 2.81625 13.7123ZM14.25 1.5H10.5V0.75C10.5 0.551088 10.421 0.360322 10.2803 0.21967C10.1397 0.0790176 9.94891 0 9.75 0H5.25C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H0.75C0.551088 1.5 0.360322 1.57902 0.21967 1.71967C0.0790176 1.86032 0 2.05109 0 2.25C0 2.44891 0.0790176 2.63968 0.21967 2.78033C0.360322 2.92098 0.551088 3 0.75 3H14.25C14.4489 3 14.6397 2.92098 14.7803 2.78033C14.921 2.63968 15 2.44891 15 2.25C15 2.05109 14.921 1.86032 14.7803 1.71967C14.6397 1.57902 14.4489 1.5 14.25 1.5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          );
        })}

        <button className="w-full mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default EditList;
