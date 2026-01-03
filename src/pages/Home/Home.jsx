import React from "react";
import Banner from "./Banner";
import FeaturedArtworks from "./FeaturedArtworks";
import TopArtist from "./Testimonials";
import ArtStats from "./ArtStats";
import ArtCategories from "./ArtCategories";
import Testimonials from "./UserReview";
import Newsletter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ArtStats></ArtStats>
      <FeaturedArtworks></FeaturedArtworks>
      <ArtCategories></ArtCategories>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
