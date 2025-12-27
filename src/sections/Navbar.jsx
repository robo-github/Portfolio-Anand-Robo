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
        <nav
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
            className={`text-white-white sm:text-sm ${
              !sidebarOpen
                ? "max-sm:w-0 overflow-hidden"
                : "max-sm:w-60 max-sm:pl-10"
            } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-second/30 max-sm:backdrop-blur-md max-sm:border-white/10 max-sm:text-white-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
          >
            <img
              onClick={() => setSidebarOpen(false)}
              src={assets.close_icon}
              alt="Close"
              className="w-8 absolute right-4 top-4 sm:hidden rounded-full bg-white-white p-1"
            />
            <a
              onClick={() => setSidebarOpen(false)}
              href="#"
              className="hover:text-primary transition hover:border-b"
            >
              Home
            </a>
            <a
              onClick={() => setSidebarOpen(false)}
              href="#about-me"
              className="hover:text-primary transition hover:border-b"
            >
              About Me
            </a>
            <a
              onClick={() => setSidebarOpen(false)}
              href="#skills"
              className="hover:text-primary transition hover:border-b"
            >
              Skills
            </a>
            <a
              onClick={() => setSidebarOpen(false)}
              href="#projects"
              className="hover:text-primary transition hover:border-b"
            >
              Projects
            </a>
            <a
              onClick={() => setSidebarOpen(false)}
              href="#contact"
              className="hover:text-primary transition hover:border-b"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              className="w-6 sm:hidden"
              onClick={() => setSidebarOpen(true)}
              width={14}
              src={!sidebarOpen ? assets.menu_icon : ""}
              alt=""
            />

            <a
              href="/anandtp_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm  max-sm:hidden bg-white-white rounded-full px-6 py-2 flex gap-2 text-second cursor-pointer transition-all hover:scale-103 hover:bg-primary/80"
            >
              Resume{" "}
              <img
                width={14}
                src={assets.download_icon}
                alt="download"
                className="text-second h-6 w-6 "
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
