import React, { useState, useRef } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const audioRef = useRef(null);

  const startShockSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth"; // Electric buzz sound
      osc.frequency.setValueAtTime(150, ctx.currentTime); // Continuous buzz

      gain.gain.setValueAtTime(0.05, ctx.currentTime); // Low volume

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      audioRef.current = { ctx, osc };
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  const stopShockSound = () => {
    if (audioRef.current) {
      const { ctx, osc } = audioRef.current;
      try {
        osc.stop();
        ctx.close();
      } catch (e) {
        console.error("Audio stop failed", e);
      }
      audioRef.current = null;
    }
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      {/* Centering wrapper */}
      <div className="mx-auto max-w-5xl  px-4">
        {/* Pill navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between rounded-full 
                         backdrop-blur-md bg-second/30
                        px-6 py-3 border border-white/10"
        >
          {/* Left */}
          <div className="flex items-center gap-2">
            <motion.img
              id="home"
              src={assets.my_logo}
              alt="Logo"
              className="h-8 w-auto cursor-pointer "
              whileHover={{
                x: [0, -3, 3, -3, 3, 0], // Shake animation
                transition: { duration: 0.2, repeat: Infinity },
              }}
              onHoverStart={startShockSound}
              onHoverEnd={stopShockSound}
            />
          </div>

          {/* Right */}
          <div
            className={`text-white-white sm:text-sm max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:w-64 max-sm:min-h-screen max-sm:flex-col max-sm:pt-24 max-sm:pl-10 max-sm:pr-6 max-sm:gap-8 flex sm:items-center gap-5 z-50 max-sm:transition max-sm:duration-500 ${
              !sidebarOpen
                ? "max-sm:translate-x-full max-sm:opacity-0 max-sm:pointer-events-none"
                : "max-sm:translate-x-0 max-sm:opacity-100 max-sm:pointer-events-auto max-sm:bg-second/80 max-sm:backdrop-blur-md max-sm:border-l max-sm:border-white/10 max-sm:shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            }`}
          >
            <motion.img
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(false)}
              src={assets.close_icon}
              alt="Close"
              className="w-8 absolute right-4 top-4 sm:hidden rounded-full bg-white-white p-1 cursor-pointer"
            />
            
            {[
              { name: "Home", link: "#" },
              { name: "About Me", link: "#about-me" },
              { name: "Skills", link: "#skills" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(false)}
                href={item.link}
                className="hover:text-primary transition hover:border-b max-sm:w-full max-sm:text-left"
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(false)}
              href="/anandtp_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-auto mb-10 text-second hover:bg-primary/80 font-bold text-center bg-white-white rounded-full px-6 w-full py-3 cursor-pointer transition hover:border-b flex justify-center items-center gap-2"
            >
              Resume
              <img
                width={14}
                src={assets.download_icon}
                alt="download"
                className="text-second h-6 w-6"
              />
            </motion.a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              className="w-6 sm:hidden"
              onClick={() => setSidebarOpen(true)}
              width={14}
              src={!sidebarOpen ? assets.menu_icon : ""}
              alt=""
            />

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/anandtp_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm  max-sm:hidden bg-white-white rounded-full px-6 py-2 flex gap-2 text-second cursor-pointer transition-all hover:bg-primary/80"
            >
              Resume{" "}
              <img
                width={14}
                src={assets.download_icon}
                alt="download"
                className="text-second h-6 w-6 "
              />
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
