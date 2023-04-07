import React from "react";
import inviteBanner from "../assets/invite-banner.png";
import img3 from "../assets/img3.png";
import whiteLogo from "../assets/logo-white.png";
import unkownImg from "../assets/unkown.png";

const InviteBanner = ({ handleInvite, isOverlayOpen }) => {
  const handleAction = () => {
    handleInvite();
    isOverlayOpen();
  };
  return (
    <div className="wrapper relative rounded-2xl border-[5px] border-white shadow__style mb-8">
      <button className="absolute top-2 right-2 md:top-6 md:right-6">
        <svg
          className="w-8 h-8"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5803 1.39648H14.3202C15.0769 1.39648 15.6902 2.00846 15.6902 2.76334V3.5408C15.6902 4.12554 16.0835 4.63355 16.6248 4.85776C17.1663 5.08206 17.7968 4.99658 18.2113 4.58295L18.7625 4.03303C19.2975 3.49923 20.1649 3.49923 20.6999 4.03303L22.6373 5.96606C23.1724 6.49986 23.1723 7.3653 22.6373 7.8991L22.0863 8.44894C21.6716 8.86259 21.586 9.49167 21.8108 10.032C22.0355 10.572 22.5447 10.9645 23.1309 10.9645H23.91C24.6667 10.9645 25.28 11.5764 25.28 12.3314V15.0651C25.28 15.82 24.6667 16.4319 23.91 16.4319H23.1308C22.5447 16.4319 22.0356 16.8244 21.8108 17.3644C21.586 17.9047 21.6716 18.5338 22.0863 18.9474L22.6373 19.4973C23.1724 20.031 23.1724 20.8965 22.6373 21.4303L20.6999 23.3633C20.1649 23.8972 19.2975 23.8972 18.7625 23.3633L18.2113 22.8135C17.7968 22.3998 17.1663 22.3144 16.6248 22.5387C16.0835 22.763 15.6902 23.2709 15.6902 23.8556V24.6331C15.6902 25.388 15.0769 26 14.3202 26H11.5803C10.8236 26 10.2103 25.388 10.2103 24.6331V23.8558C10.2103 23.2709 9.81694 22.7628 9.27562 22.5387C8.73411 22.3144 8.10359 22.3998 7.689 22.8135L7.13788 23.3633C6.60287 23.8972 5.73546 23.8972 5.20045 23.3633L3.26301 21.4303C2.72801 20.8965 2.72801 20.031 3.26301 19.4973L3.81421 18.9474C4.22877 18.5338 4.31445 17.9047 4.08964 17.3644C3.86492 16.8244 3.35576 16.4319 2.76968 16.4319H1.99046C1.23385 16.4319 0.620483 15.82 0.620483 15.0651V12.3314C0.620483 11.5764 1.23385 10.9645 1.99046 10.9645H2.76966C3.35574 10.9645 3.86492 10.5721 4.08965 10.032C4.31448 9.49171 4.2288 8.86267 3.81421 8.44902L3.26304 7.8991C2.72802 7.3653 2.72802 6.49986 3.26304 5.96608L5.20047 4.03303C5.73548 3.49925 6.6029 3.49925 7.13791 4.03303L7.68908 4.58295C8.10366 4.9966 8.73415 5.08209 9.27565 4.85777C9.81695 4.63355 10.2103 4.12553 10.2103 3.54076V2.76334C10.2103 2.00846 10.8236 1.39648 11.5803 1.39648Z"
            stroke="white"
          />
          <path
            d="M15.8272 13.6982C15.8272 15.2835 14.5392 16.5686 12.9502 16.5686C11.3613 16.5686 10.0733 15.2835 10.0733 13.6982C10.0733 12.1128 11.3613 10.8278 12.9502 10.8278C14.5392 10.8278 15.8272 12.1128 15.8272 13.6982Z"
            stroke="white"
          />
        </svg>
      </button>

      <div className="absolute top-[55%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[85%] md:w-[75%] flex justify-between items-center">
        <div className="w-[40%] flex flex-col items-center">
          <img
            className="bg-white rounded-full p-[2.5px] mb-2"
            src={img3}
            alt="!#"
          />
          <p className="text-white text-sm md:text-lg font-black">Florian B.</p>
        </div>

        <div className="-mt-8">
          <img className="w-20" src={whiteLogo} alt="!#" />
        </div>

        <div className="w-[40%] flex flex-col items-center">
          <img
            className="bg-white rounded-full p-[2.5px]  mb-2"
            src={unkownImg}
            alt="!#"
          />
          <button
            onClick={handleAction}
            className="text-white underline text-sm md:text-lg font-black"
          >
            + Invite Partner
          </button>
        </div>
      </div>

      <img className="w-full rounded-2xl" src={inviteBanner} alt="!#" />
    </div>
  );
};

export default InviteBanner;
