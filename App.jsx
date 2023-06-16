import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import LatestNews from "../components/LatestNews";
import About from "../components/About";
import Media from "../components/Media";
import Subscribe from "../components/Subscribe"
import PreOrder from "../components/PreOrder";
import Footer from "../components/Footer";
import "../components/styles.css";

function App() {
  return (
    <div>
      <Hero />
      <Explore />
      <LatestNews />
      <About />
      <Media />
      <Subscribe />
      <PreOrder />
      <Footer />
    </div>
  );
}

export default App;
