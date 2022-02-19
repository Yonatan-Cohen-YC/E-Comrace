import React from "react";
import HomeSection from "../../Components/HomeSection/HomeSection";
import LatesProducts from "../../Components/LatestProducts/latestProducts";
import SectionTitle from "../../Components/SectionTitle/sectionTitle";
import "./home.css";

function Home() {
  return (
    <div className="homeContainer">
      <HomeSection />
      <SectionTitle title="Latest Products" />
      <LatesProducts />
    </div>
  );
}

export default Home;
