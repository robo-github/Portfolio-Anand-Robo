import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";
import TextType from "../components/TextType";
import TargetCursor from "../components/TargetCursor";

const Hero = () => {
  const [showTextType, setShowTextType] = useState(false);

  const handleAnimationComplete = () => {
    setShowTextType(true);
  };

  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-48 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden"
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <span className="gradient-text">
        <BlurText
          text="Most of my learning starts"
          delay={150}
          animateBy="words"
          direction="top"
          spanClassName="leading-[1.25] gradient-text text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-black"
          className="cursor-target"
        />
        <BlurText
          text="after something doesn’t work."
          delay={160}
          animateBy="words"
          direction="top"
          className="cursor-target"
          onAnimationComplete={handleAnimationComplete}
          spanClassName=" leading-[1.25] gradient-text text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-black"
        />
      </span>

      {showTextType && (
        <TextType
          text={[
            "Anand TP  ·  Full-Stack Developer (MERN)",
            "Building real-world web applications.",
            "Integrating AI into modern workflows.",
          ]}
          typingSpeed={80}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="gradient-text-white text-2xl mt-7 sm:text-3xl md:text-4xl font-medium mb-8 text-white"
        />
      )}

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showTextType ? 1 : 0, y: showTextType ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-gray-300 shadow-sm  shadow-primary hover:scale-103  transition-all duration-300 ease-out bg-second/30 text-sm rounded-full mt-7 px-8 py-2 border border-white/10 backdrop-blur-md hover:text-primary hover:bg-gray-300 hover:shadow-lg  hover:inset-shadow-primary  hover:scale-[1.03] active:scale-[0.98]"
        href="#contact"
      >
        Get In Touch
      </motion.a>
    </div>
  );
};

export default Hero;
