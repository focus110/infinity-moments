import React from "react";

const CartIcon = () => {
  return (
    <div className="relative mb-8 flex justify-center">
      <div className="relative bg-black p-6 rounded-full">
        <div className="absolute -top-3 -right-2 bg-green shadow__style p-3 rounded-xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#64BA67" />
            <path
              d="M6 10.5L8.50105 13L13.5011 8"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="">
          <svg
            className="w-8"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.87 21.472L25.7166 12.1802C25.014 8.86446 23.0255 7.5 21.1298 7.5H5.89757C3.97533 7.5 1.92051 8.76895 1.32396 12.1802L0.157353 21.472C-0.797127 28.2943 2.71593 30 7.3028 30H19.7378C24.3113 30 27.7184 27.5302 26.87 21.472ZM9.1455 15.2229C8.41334 15.2229 7.81982 14.612 7.81982 13.8584C7.81982 13.1049 8.41334 12.4939 9.1455 12.4939C9.87765 12.4939 10.4712 13.1049 10.4712 13.8584C10.4712 14.612 9.87765 15.2229 9.1455 15.2229ZM16.503 13.8584C16.503 14.612 17.0966 15.2229 17.8287 15.2229C18.5609 15.2229 19.1544 14.612 19.1544 13.8584C19.1544 13.1049 18.5609 12.4939 17.8287 12.4939C17.0966 12.4939 16.503 13.1049 16.503 13.8584Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M20.9609 7.16148C20.9655 7.27784 20.9432 7.39369 20.8955 7.5H18.7398C18.6981 7.39191 18.6759 7.2773 18.6746 7.16148C18.6746 4.28523 16.3349 1.95357 13.4486 1.95357C10.5624 1.95357 8.22276 4.28523 8.22276 7.16148C8.24253 7.27347 8.24253 7.38802 8.22276 7.5H6.01484C5.99505 7.38802 5.99505 7.27347 6.01484 7.16148C6.18258 3.15886 9.48749 0 13.5074 0C17.5274 0 20.8323 3.15886 21 7.16148H20.9609Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
