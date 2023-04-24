import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="bg-white">
      <img className="wrapper w-20 mx-auto pt-12 pb-8" src={logo} alt="!#" />

      <div className="wrapper text-center mb-8 md:mb-12">
        <h2 className="text-black text-5xl md:text-5xl font-fragille">
          infinity
        </h2>
        <p className="font-black text-lg">moments</p>
      </div>

      <div className="wrapper mb-8">
        <h4 className="text-lg font-black">Welcome!</h4>
        <p className="text-sm">please login or sign up to countinue our app</p>
      </div>

      <form className="wrapper relative flex flex-col mb-4">
        <div className="flex justify-between items-center border-b border-border-grey mb-8">
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="font-black mb-1">
              Email
            </label>
            <input
              name="email"
              className="outline-none placeholder:font-black mb-[1px]"
              type="text"
              placeholder="Enter email"
            />
          </div>
          <button className="">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-border-grey mb-12">
          <div className="flex flex-col flex-1">
            <label htmlFor="pwd" className="font-black mb-1">
              Password
            </label>
            <input
              name="pwd"
              className="outline-none placeholder:font-black mb-[1px]"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <button className="w-full mx-auto flex justify-center items-center bg-black text-white py-3 rounded-full px-8">
          <span>Login</span>
        </button>
      </form>

      <div className="wrapper text-center">
        <p className="relative mb-4">
          <span className="bg-white px-[4px] relative z-10"> Or</span>
          <hr className="absolute w-full top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] opacity-10 " />
        </p>
        <button className="w-full bg-[#3B5998] mx-auto flex items-center justify-center text-white py-3 rounded-full px-8 mb-4">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.54565 0C3.37819 0 0 3.37819 0 7.54565C0 11.3117 2.75944 14.4333 6.36702 15V9.72635H4.45042V7.54565H6.36702V5.88334C6.36702 3.9924 7.49283 2.94809 9.21701 2.94809C10.0425 2.94809 10.9057 3.09523 10.9057 3.09523V4.95146H9.95498C9.01705 4.95146 8.72504 5.53323 8.72504 6.13009V7.54565H10.8174L10.4832 9.72635H8.72504V15C12.3319 14.4341 15.0913 11.3109 15.0913 7.54565C15.0913 3.37819 11.7131 0 7.54565 0Z"
              fill="white"
            />
          </svg>
          <span className="ml-2">Countinue with Facebook</span>
        </button>

        <button className="w-full mx-auto flex items-center justify-center border border-[#666] border-opacity-20 text-[#666] py-3 rounded-full px-8 mb-4">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.798 4.1325C1.42201 2.88993 2.37928 1.84538 3.56282 1.1156C4.74637 0.38582 6.10955 -0.000437676 7.5 3.72173e-07C9.52125 3.72173e-07 11.2192 0.7425 12.5175 1.95375L10.3672 4.10475C9.5895 3.3615 8.601 2.98275 7.5 2.98275C5.54625 2.98275 3.8925 4.30275 3.30375 6.075C3.15375 6.525 3.06825 7.005 3.06825 7.5C3.06825 7.995 3.15375 8.475 3.30375 8.925C3.89325 10.698 5.54625 12.0172 7.5 12.0172C8.50875 12.0172 9.3675 11.751 10.0395 11.301C10.4291 11.0445 10.7626 10.7117 11.0199 10.3226C11.2772 9.93357 11.4529 9.49639 11.5365 9.0375H7.5V6.1365H14.5635C14.652 6.627 14.7 7.1385 14.7 7.67025C14.7 9.95475 13.8825 11.8777 12.4635 13.1827C11.223 14.3287 9.525 15 7.5 15C6.51498 15.0004 5.53953 14.8067 4.62941 14.4299C3.71929 14.0531 2.89234 13.5007 2.19582 12.8042C1.4993 12.1077 0.946872 11.2807 0.570101 10.3706C0.19333 9.46047 -0.000393646 8.48503 6.00536e-07 7.5C6.00536e-07 6.2895 0.289501 5.145 0.798 4.1325Z"
              fill="black"
            />
          </svg>
          <span className="ml-2">Countinue with Google</span>
        </button>

        <button className="w-full mx-auto flex items-center justify-center border border-[#666] border-opacity-20 text-[#666] py-3 rounded-full px-8 mb-4">
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.20462 4.30985C5.61212 4.30985 4.69496 3.63618 3.7291 3.66053C2.45481 3.67676 1.28604 4.39913 0.628606 5.54355C-0.694379 7.84052 0.287714 11.2332 1.57823 13.1C2.21132 14.009 2.95803 15.0317 3.94824 14.9992C4.89787 14.9587 5.255 14.3824 6.40754 14.3824C7.55196 14.3824 7.87662 14.9992 8.88306 14.9749C9.90574 14.9587 10.5551 14.0496 11.18 13.1325C11.9024 12.0773 12.2027 11.0546 12.2189 10.9978C12.1946 10.9897 10.2304 10.2349 10.206 7.96226C10.1898 6.06301 11.7563 5.15396 11.8293 5.11338C10.9365 3.80663 9.56485 3.66053 9.08597 3.62807C7.83604 3.53067 6.78901 4.30985 6.20462 4.30985ZM8.31491 2.39436C8.84248 1.76128 9.19149 0.876579 9.09409 0C8.33926 0.0324659 7.43021 0.503222 6.88641 1.13631C6.39942 1.69634 5.97736 2.59727 6.09099 3.45762C6.92699 3.52255 7.78734 3.02745 8.31491 2.39436Z"
              fill="black"
            />
          </svg>
          <span className="ml-2">Countinue with Apple</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
