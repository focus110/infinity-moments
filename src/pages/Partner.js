import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeaturedPhoto from "../components/FeaturedPhoto";
import FeaturedSoundtrack from "../components/FeaturedSoundtrack";
import Quotes from "../components/Quotes";
import BucketList from "../components/BucketList";

const Partner = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedPhoto />
      <FeaturedSoundtrack />
      <Quotes />
      <BucketList />
    </div>
  );
};

export default Partner;
