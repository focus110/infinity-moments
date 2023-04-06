import React from "react";
import InviteBanner from "../components/InviteBanner";
import Nav from "../components/Nav";
import AddSection from "../components/AddSection";
import HeadingText from "../components/HeadingText";

const InvitePartner = () => {
  return (
    <div>
      <Nav />
      <InviteBanner />
      <HeadingText
        heading="Featured Photo"
        rightText="Upload Photo"
        desc="Please select a featured photo to show here"
      />
      <HeadingText
        heading="Featured Soundtrack"
        rightText="Edit"
        desc="Please select a featured soundtrack to show here"
      />
      <HeadingText
        heading="Quotes"
        rightText="Edit"
        desc="Please select your favourite quotes to show here"
      />
      <HeadingText
        heading="Bucket List"
        rightText="Add Item"
        desc="Please add item to your bucket list"
      />
      <HeadingText
        heading="Timeline"
        rightText="Edit"
        desc="Please add dates to your relationship timeline"
      />
      <AddSection />
    </div>
  );
};

export default InvitePartner;
