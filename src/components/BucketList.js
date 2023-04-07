import React, { useState } from "react";
import Title from "./Title";
import { bucketList } from "./Data";

const BucketList = ({ overlay, isOverlayOpen }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAdd = () => {
    isOverlayOpen();
  };

  return (
    <div className="wrapper">
      <div className="flex justify-between items-end py-6">
        <Title title="Bucket List" />
        <button onClick={handleAdd}>
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

      {bucketList.map((item, i) => {
        return (
          <label key={i} class="box">
            <p
              className={`${
                isChecked ? "line-through text-black-faded" : ""
              } text-base md:text-xl font-medium `}
            >
              {item.title}
            </p>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className="checkmark"></span>
          </label>
        );
      })}
    </div>
  );
};

export default BucketList;
