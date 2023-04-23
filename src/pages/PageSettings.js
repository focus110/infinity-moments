import React from "react";
import Nav from "../components/Nav";
import PageTitle from "../components/PageTitle";
import UploadCover from "../components/UploadCover";
import Prefrences from "../components/Prefrences";
import LeavePage from "../components/LeavePage";

const PageSettings = () => {
  return (
    <div>
      <Nav />
      <PageTitle title="Page Settings" />
      <UploadCover />
      <Prefrences />
      <LeavePage />
    </div>
  );
};

export default PageSettings;
