import React, { useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeaturedPhoto from "../components/FeaturedPhoto";
import FeaturedSoundtrack from "../components/FeaturedSoundtrack";
import Quotes from "../components/Quotes";
import BucketList from "../components/BucketList";
import TimeLine from "../components/TimeLine";
import AddSection from "../components/AddSection";
import Overlay from "../components/Overlay";
import EditSoundtrack from "../components/modals/EditSoundtrack";
import EditQuotes from "../components/modals/EditQuotes";
import EditList from "../components/modals/EditList";

const Partner = ({ overlay, isOverlayOpen }) => {
  const [editTrack, setEditTrack] = useState(false);
  const [editQuote, setEditQuote] = useState(false);
  const [editList, setEditList] = useState(false);

  const handleEditTrack = () => {
    setEditTrack(!editTrack);
  };

  const handleEditQuote = () => {
    setEditQuote(!editQuote);
  };

  const handleEditList = () => {
    setEditList(!editList);
  };
  return (
    <div className="relative">
      <Overlay
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        setEditTrack={setEditTrack}
        setEditQuote={setEditQuote}
        setEditList={setEditList}
      />
      <EditSoundtrack
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editTrack={editTrack}
        handleEditTrack={handleEditTrack}
      />
      <EditQuotes
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editQuote={editQuote}
        handleEditQuote={handleEditQuote}
      />
      <EditList
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editList={editList}
        handleEditList={handleEditList}
      />

      <Nav />
      <Hero />
      <FeaturedPhoto overlay={overlay} isOverlayOpen={isOverlayOpen} />
      <FeaturedSoundtrack
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editTrack={editTrack}
        handleEditTrack={handleEditTrack}
      />
      <Quotes
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editQuote={editQuote}
        handleEditQuote={handleEditQuote}
      />
      <BucketList
        overlay={overlay}
        isOverlayOpen={isOverlayOpen}
        editList={editList}
        handleEditList={handleEditList}
      />
      <TimeLine overlay={overlay} isOverlayOpen={isOverlayOpen} />
      <AddSection />
    </div>
  );
};

export default Partner;
