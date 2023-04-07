import React, { useState } from "react";
import Title from "./Title";

const TimeLine = ({ handleEditTl, isOverlayOpen }) => {
  const [timeline, setTimeline] = useState([
    { name: "Look, an R8", date: "Jan,21" },
    { name: "The Alien", date: "Mar,21" },
    { name: "Randomness", date: "Sep,21" },
    { name: "Randomness", date: "Jan,21" },
    { name: "Randomness", date: "Jan,21" },
    { name: "Randomness", date: "Jan,21" },
  ]);

  const handleEdit = () => {
    handleEditTl();
    isOverlayOpen();
  };
  return (
    <div className="">
      <div className="wrapper flex justify-between items-end py-6">
        <Title title="Timeline" />
        <button onClick={handleEdit}>
          <p className="underline font-bold text-lg md:text-xl">Edit</p>
        </button>
      </div>

      <div className="pb-8 relative">
        <div className="md:w-[500px] mx-auto flex justify-center items-end space-x-28 overflow-x-scroll scrollbar-hide pt-8">
          {timeline.map((item, i) => {
            return (
              <div className="relative">
                <div className=" w-[3px] h-12 bg-black flex justify-center">
                  <p className="absolute -top-8 text-sm underline text-center w-28">
                    {item.name}
                  </p>
                  <div className="absolute top-0 bg-white flex justify-center rounded-full w-5 h-5 border-[3.5px] items-center">
                    <div className="bg-black rounded-full w-2 h-2"></div>
                  </div>
                  {/* <p className="absolute -bottom-10 z-10 text-center text-sm text-black-faded py-4 ">
                    {item.date}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
        <hr className="md:w-[500px] m-auto border-[2px]" />
      </div>
    </div>
  );
};

export default TimeLine;
