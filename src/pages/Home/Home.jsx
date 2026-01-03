import React from "react";
import Banner from "./Banner";
import FeaturedArtworks from "./FeaturedArtworks";
import TopArtist from "./TopArtist";
import ArtStats from "./ArtStats";
import Testimonials from "./UserReview";
import WhyUChoseUs from "./WhyUChoseUs";
import Faq from "./Faq";
import Call2Actions from "./Call2Actions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ArtStats></ArtStats>
      <FeaturedArtworks></FeaturedArtworks>
      <TopArtist></TopArtist>
      <Testimonials></Testimonials>
      <WhyUChoseUs></WhyUChoseUs>
      <Call2Actions></Call2Actions>
      <Faq></Faq>
    </div>
  );
};

export default Home;
