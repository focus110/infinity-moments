import React from "react";
import PageTitle from "../PageTitle";

const ChangePwd = ({ isOverlayOpen, editPwd, handleEditPwd }) => {
  const handleClose = () => {
    isOverlayOpen();
    handleEditPwd()
  };

  if (!editPwd) {
    return null;
  }
  return (
    <div className="wrapper fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50">
      <div className="w-full flex flex-col justify-center space-y-8  bg-white p-8 rounded-2xl top__fade__ani">
        <div className="flex justify-between items-center">
          <PageTitle title="Change Password" handleClose={handleClose} />
        </div>

        <form className="flex flex-col space-y-4">
          <label htmlFor="currPwd" className="font-black">
            Current Password
          </label>
          <input
            name="currPwd"
            className="border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
            type="Password"
            placeholder="Password"
            // value={quotes?.florians}
            // onChange={onChange}
          />

          <label htmlFor="newPwd" className="font-black">
            New Password
          </label>
          <input
            name="newPwd"
            className="border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
            type="text"
            placeholder="New Password"
            // value={quotes?.sandras}
            // onChange={onChange}
          />

          <label htmlFor="confirmPwd" className="font-black">
            Confirm Password
          </label>
          <input
            name="confirmPwd"
            className="border-2 outline-none border-border-grey rounded-2xl py-4 px-4 placeholder:font-black mb-4"
            type="text"
            placeholder="Confirm Password"
            // value={quotes?.sandras}
            // onChange={onChange}
          />
        </form>
        <button className="w-full mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default ChangePwd;
