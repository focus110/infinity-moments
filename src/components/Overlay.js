import React from "react";

const Overlay = ({ overlay, isOverlayOpen, setEditTrack, setEditQuote }) => {
  const handleIsOpen = () => {
    isOverlayOpen();
    setEditTrack(false);
    setEditQuote(false);
  };
  return (
    <div>
      {overlay ? (
        <div
          onClick={handleIsOpen}
          className="fixed bg-black bg-opacity-70 w-full min-h-screen z-50"
        ></div>
      ) : null}
    </div>
  );
};

export default Overlay;
