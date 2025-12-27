import React, { useRef } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import DotGrid from "./components/DotGrid";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ConnectMe from "./sections/ConnectMe";
import { Toaster } from "react-hot-toast";
import Footer from "./sections/Footer";

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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                border: "1px solid rgba(82, 39, 255, 0.2)",
                backdropFilter: "blur(10px)",
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "rgba(255, 75, 75, 0.1)",
                color: "#fff",
                border: "1px solid rgba(255, 75, 75, 0.2)",
                backdropFilter: "blur(10px)",
              },
            },
            className: "font-medium",
          }}
        />
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ConnectMe />
        <Footer />
        {/* <Skills /> */}
        {/* other page sections go here */}
      </div>
    </>
  );
};

export default App;
