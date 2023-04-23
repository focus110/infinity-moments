import React from "react";

const Overlay = ({
  overlay,
  isOverlayOpen,
  setEditTrack,
  setEditQuote,
  setEditList,
  setEditTl,
  setInvite,
  editTrack,
  invite,
  editQuote,
  editList,
  editTl,
  editPwd,
  setEditPwd,
}) => {
  const handleIsOpen = () => {
    isOverlayOpen();
    if (editTrack) setEditTrack(false);
    if (editQuote) setEditQuote(false);
    if (editList) setEditList(false);
    if (editTl) setEditTl(false);

    if (invite) setInvite(false);
    if (editPwd) setEditPwd(false);
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
