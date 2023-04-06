import React from "react";
import Title from "./Title";
import trackImg from "../assets/track-img.png";

const FeaturedSoundtrack = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-between items-center py-6">
        <Title title="Featured SoundTrack" />
        <button>
          <svg
            className="w-8 h-8"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3333 12.5H12.5M12.5 12.5H8.66667M12.5 12.5V8.66667M12.5 12.5V16.3333M18.8889 24H6.11111C3.28832 24 1 21.7116 1 18.8889V6.11111C1 3.28832 3.28832 1 6.11111 1H18.8889C21.7116 1 24 3.28832 24 6.11111V18.8889C24 21.7116 21.7116 24 18.8889 24Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-between items-center rounded-[13px] p-4 md:p-8 m-2 md:m-4 shadow__style">
        <div>
          <img className="w-16 md:w-24 rounded-[5px]" src={trackImg} alt="!#" />
        </div>

        <div className="md:space-y-[2.5px]">
          <h2 className="md:text-2xl">Cyber Motherboard</h2>
          <p className="text-sm md:text-base text-[#666666]">
            by Trirole Snakers
          </p>
          <p className="bg-[#eeeeee] text-sm w-max py-[2.5px] px-[5px] rounded-[5px]">
            03:23
          </p>
        </div>

        <button className="self-end">
          <svg
            className="w-10 h-10"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.896 0.774658C8.35763 0.774658 0.624023 8.49069 0.624023 18.0074C0.624023 27.5241 8.35763 35.2402 17.896 35.2402C27.4343 35.2402 35.168 27.5241 35.168 18.0074C35.168 8.49069 27.4343 0.774658 17.896 0.774658ZM24.3097 18.2025L14.5942 23.9879C14.5247 24.0301 14.4361 24.0321 14.3644 23.99C14.2949 23.95 14.2506 23.8754 14.2506 23.7923V18.0068V12.2213C14.2506 12.1393 14.2949 12.0636 14.3644 12.0235C14.4361 11.9825 14.5247 11.9846 14.5942 12.0256L24.3097 17.8122C24.3793 17.8516 24.4205 17.9278 24.4205 18.0067C24.4205 18.0873 24.3794 18.162 24.3097 18.2025Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeaturedSoundtrack;
