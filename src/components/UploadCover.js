import React from "react";
import profileImg from "../assets/profile-Img.png";
import heroImg from "../assets/hero-Img.png";

const UploadCover = () => {
  return (
    <div className="wrapper relative">
      <div className="w-full absolute top-[55%] left-[50%] -translate-x-[50%] -translate-y-[50%]  flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center mx-auto text-center md:space-y-[1px] bg-black bg-opacity-[65%] py-3 mb-6">
          <div className="flex justify-center items-start space-x-4 text-white text-center">
            <p className="text-white text-sm md:text-lg">11th Jan, 2021 </p>
            <button>
              <svg
                className="w-6 h-6"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.77781 10.3047H11.0903M7.02769 1.55469L1.40367 7.17871C0.992011 7.59039 0.666992 8.09008 0.568048 8.66377C0.468142 9.24302 0.434892 9.96189 0.777698 10.3047C1.1205 10.6475 1.83937 10.6143 2.41862 10.5143C2.99232 10.4154 3.49201 10.0904 3.90367 9.67871L9.52769 4.05469M7.02769 1.55469C7.02769 1.55469 8.90269 -0.320312 10.1527 0.929688C11.4027 2.17969 9.52769 4.05469 9.52769 4.05469M7.02769 1.55469L9.52769 4.05469"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-white text-sm md:text-lg">773 days together</p>
        </div>

        <button className="flex mx-auto items-center text-white space-x-2 py-2 px-8 border-[1.5px] md:border-[2.5px] border-white rounded-3xl mb-4">
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.51721 6.20557C5.51806 6.48172 5.29491 6.70627 5.01876 6.70712C4.74266 6.70802 4.51806 6.48482 4.51721 6.20872L5.51721 6.20557Z"
              fill="white"
            />
            <path
              d="M3.85934 2.56423L4.50376 1.91577L4.51721 6.20866L5.51721 6.20551L5.50376 1.91264L6.15221 2.55704C6.34806 2.75169 6.66466 2.75071 6.85931 2.55483C7.05396 2.35896 7.05296 2.04237 6.85711 1.84773L4.99776 0L3.15002 1.85934L3.85934 2.56423Z"
              fill="white"
            />
            <path
              d="M3.15001 1.85938C2.95536 2.05525 2.95635 2.37184 3.15222 2.56649C3.34809 2.76114 3.66469 2.76014 3.85933 2.56426L3.15001 1.85938Z"
              fill="white"
            />
            <path
              d="M1 5.20239C1 4.65009 1.44772 4.20239 2 4.20239C2.27614 4.20239 2.5 3.97854 2.5 3.70239C2.5 3.42625 2.27614 3.20239 2 3.20239C0.89543 3.20239 0 4.09782 0 5.20239V8.20239C0 9.30694 0.89543 10.2024 2 10.2024H7.5C8.8807 10.2024 10 9.08309 10 7.70239V5.20239C10 4.09782 9.10455 3.20239 8 3.20239C7.72385 3.20239 7.5 3.42625 7.5 3.70239C7.5 3.97854 7.72385 4.20239 8 4.20239C8.5523 4.20239 9 4.65009 9 5.20239V7.70239C9 8.53084 8.32845 9.20239 7.5 9.20239H2C1.44772 9.20239 1 8.75469 1 8.20239V5.20239Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-sm md:text-xl">
            Upload new cover
          </span>
        </button>

        <button className="text-center mb-4">
          <p className="underline text-white text-sm md:text-lg">
            Remove this cover
          </p>
        </button>
      </div>

      <img className="w-full rounded-2xl" src={heroImg} alt="!#" />
    </div>
  );
};

export default UploadCover;
