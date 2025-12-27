import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import DotGrid from "./components/DotGrid";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";

const App = () => {
  return (
    <>
      {/* Fullscreen fixed background (won't block interactions) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Page content sits above the background and is top-aligned */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        {/* <Skills /> */}
        {/* other page sections go here */}
      </div>
    </>
  );
};

export default App;
