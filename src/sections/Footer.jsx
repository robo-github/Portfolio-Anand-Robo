import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import TargetCursor from "../components/TargetCursor";

const Footer = () => {
  return (
    <footer className="py-10 mt-10 w-full relative overflow-hidden">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-2xl font-bold sub-text-gradient cursor-target">
            Anand TP
          </h2>
          <p className="text-white/60 text-sm cursor-target">
            Full-Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/robo-github"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
          >
            <img
              src={assets.github}
              alt="GitHub"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anandtp/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
          >
            <img
              src={assets.linkedIn}
              alt="LinkedIn"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
            />
          </a>
          <a
            href="https://www.instagram.com/anandx._/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
          >
            <img
              src={assets.instagram}
              alt="Instagram"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/40 text-xs text-center cursor-target"
        >
          © {new Date().getFullYear()} Anand TP. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
