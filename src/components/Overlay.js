import React from "react";

const Overlay = ({
  overlay,
  isOverlayOpen,
  setEditTrack,
  setEditQuote,
  setEditList,
}) => {
  const handleIsOpen = () => {
    isOverlayOpen();
    setEditTrack(false);
    setEditQuote(false);
    setEditList(false);
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
