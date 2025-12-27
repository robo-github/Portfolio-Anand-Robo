import React from "react";
import assets from "../assets/assets";

const AboutMe = () => {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance("Hi, I am Anand TP");
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div id="about-me" className="flex flex-col items-center gap-7 px-4 mb-30">
      <h3 className="sub-text-gradient font-extrabold text-2xl sm:text-3xl mx-20">
        How I Work
      </h3>
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        <div className="flex flex-col gap-4 text-left max-w-3xl text-white-white font-medium text-[18px] sm:text-[20px] leading-relaxed">
          <p className="gradient-text-white">
            I’m Anand TP, a BCA student and fellow at NxtWave Academy, currently
            building full-stack applications using the MERN stack.
          </p>
          <p className="gradient-text-white">
            I began with Python, exploring data engineering concepts and Django,
            before moving into React and MERN to build complete, real-world web
            applications.
          </p>
          <p className="gradient-text-white">
            Most of my time goes into building UI, fixing bugs, and
            understanding backend logic. I care deeply about clean design, solid
            logic, performance, maintainable code, and good user experience.
          </p>
          <p className="gradient-text-white">
            My goal is to build full-stack projects without relying on
            tutorials, creating real-world web pages with clear structure, full
            functionality, and thoughtful design.
          </p>
        </div>
        <div
          onClick={handleSpeak}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          title="Click to hear me!"
        >
          <img src={assets.man} className="w-40 sm:w-64" alt="Anand TP" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
