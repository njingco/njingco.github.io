import React from "react";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Section" id="Home">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home;
