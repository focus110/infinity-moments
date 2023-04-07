import React, { useState } from "react";
import InviteBanner from "../components/InviteBanner";
import Nav from "../components/Nav";
import AddSection from "../components/AddSection";
import HeadingText from "../components/HeadingText";
import Overlay from "../components/Overlay";
import InvitePartnerForm from "../components/modals/InvitePartnerForm";

const InvitePartner = ({ overlay, isOverlayOpen }) => {
  const [invite, setInvite] = useState(false);

  const handleInvite = () => {
    setInvite(!invite);
  };
  return (
    <div className="relative">
      <Overlay
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        setInvite={setInvite}
        invite={invite}
      />
      <InvitePartnerForm
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        invite={invite}
        handleInvite={handleInvite}
      />

      <Nav />
      <InviteBanner
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        invite={invite}
        handleInvite={handleInvite}
      />
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
