import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Roadmap from "../sections/Roadmap";
import Showcase from "../sections/Showcase";
import Team from "../sections/Team";
import Faq from "../sections/Faq";

function Home() {

  return (
    <>
      <Hero />
      <Showcase />
      <Roadmap />
      <About />
      <Team />
      {/* <Faq /> */}
    </>
  );
}

export default Home;
