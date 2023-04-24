import React from "react";
import profileImg from "../assets/pf-img.jpg";

const ProfileImg = () => {
  return (
    <div className="wrapper relative mb-8 flex justify-center">
      <div className="relative">
        <button className="absolute bottom-8 right-0 bg-white shadow__style p-3 rounded-xl">
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.54244 9.45995L8.42378 3.14747C8.68906 2.80706 8.78339 2.4135 8.69494 2.01277C8.61833 1.64848 8.39428 1.30209 8.05828 1.03932L7.23883 0.388366C6.5255 -0.178978 5.64117 -0.119256 5.13417 0.5317L4.58589 1.24297C4.51517 1.33196 4.53283 1.46334 4.62128 1.53501C4.62128 1.53501 6.00667 2.64581 6.03617 2.6697C6.1305 2.75928 6.20122 2.87872 6.21894 3.02205C6.24839 3.30274 6.05383 3.56551 5.765 3.60134C5.62939 3.61926 5.49967 3.57746 5.40539 3.49982L3.94922 2.34123C3.87848 2.28808 3.77236 2.29943 3.7134 2.37109L0.252855 6.85017C0.0288325 7.13083 -0.0478066 7.49511 0.0288323 7.8475L0.470982 9.7645C0.49456 9.86606 0.582994 9.93772 0.689105 9.93772L2.63457 9.91383C2.98828 9.90783 3.31842 9.74661 3.54244 9.45995ZM6.2665 8.86295H9.43878C9.74828 8.86295 10 9.11794 10 9.43145C10 9.74561 9.74828 10 9.43878 10H6.2665C5.957 10 5.70528 9.74561 5.70528 9.43145C5.70528 9.11794 5.957 8.86295 6.2665 8.86295Z"
              fill="#130F26"
            />
          </svg>
        </button>
        <img
          className="w-28 h-28 rounded-3xl object-cover mb-4"
          src={profileImg}
          alt="profile image"
        />

        <button className="text-black font-black">Update Image</button>
      </div>
    </div>
  );
};

export default ProfileImg;
