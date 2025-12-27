import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const AboutMe = () => {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance("Hi, I am Anand TP");
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="about-me"
      className="mt-10 mx-auto max-w-5xl px-4 mb-30 scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-7 px-6 py-10 bg-white/5 backdrop-blur-xs rounded-3xl border border-white/10 shadow-lg shadow-black/20"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sub-text-gradient font-extrabold text-2xl sm:text-3xl mx-20"
          >
            How I Work
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-32 h-1 bg-primary/20 rounded-full"
          ></motion.div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 text-left max-w-3xl text-white-white font-medium text-[18px] sm:text-[20px] leading-relaxed"
          >
            <p className="gradient-text-white">
              I’m Anand TP, a BCA student and fellow at NxtWave Academy,
              currently building full-stack applications using the MERN stack.
            </p>
            <p className="gradient-text-white">
              I began with Python, exploring data engineering concepts and
              Django, before moving into React and MERN to build complete,
              real-world web applications.
            </p>
            <p className="gradient-text-white">
              Most of my time goes into building UI, fixing bugs, and
              understanding backend logic. I care deeply about clean design,
              solid logic, performance, maintainable code, and good user
              experience.
            </p>
            <p className="gradient-text-white">
              My goal is to build full-stack projects without relying on
              tutorials, creating real-world web pages with clear structure,
              full functionality, and thoughtful design.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            onClick={handleSpeak}
            className="cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out rounded-full p-2 hover:shadow-lg hover:shadow-primary"
            title="Click to hear me!"
          >
            <img src={assets.man} className="  w-40 sm:w-100 " alt="Anand TP" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
