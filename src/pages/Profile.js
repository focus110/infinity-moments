import React, { useState } from "react";
import Nav from "../components/Nav";
import PageTitle from "../components/PageTitle";
import Overlay from "../components/Overlay";
import ChangePwd from "../components/modals/ChangePwd";
import ChangePwdForm from "../components/ChangePwd";
import ProfileImg from "../components/ProfileImg";
import ChangeUsername from "../components/ChangeUsername";

const Profile = ({ overlay, isOverlayOpen }) => {
  const [username, setUsername] = useState("");
  const [editPwd, setEditPwd] = useState(false);
  const [pwd, setPwd] = useState("");
  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEditPwd = () => {
    setEditPwd(!editPwd);
    isOverlayOpen();
  };
  return (
    <div className="relative h-screen">
      <Overlay
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editPwd={editPwd}
        setEditPwd={setEditPwd}
      />
      <ChangePwd
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editPwd={editPwd}
        handleEditPwd={handleEditPwd}
      />
      <Nav />
      <PageTitle title="Profile" />

      <ProfileImg />

      <ChangeUsername username={username} onChange={onChange} />

      <ChangePwdForm handleEditPwd={handleEditPwd} />

      <button className="wrapper absolute left-[50%] -translate-x-[50%] bottom-0 mx-auto flex justify-center items-center bg-black text-white py-4 rounded-xl px-8 mb-4">
        <span>Save Changes</span>
      </button>
    </div>
  );
};

export default Profile;
