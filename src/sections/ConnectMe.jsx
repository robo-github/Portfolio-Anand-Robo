import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import TargetCursor from "../components/TargetCursor";

const ConnectMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Got it! I'll get back to you after this cup of coffee.");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-20 scroll-mt-20">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="flex flex-col items-center gap-2 mb-12">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sub-text-gradient font-extrabold text-2xl sm:text-3xl"
        >
          Get In Touch
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-1 bg-primary/20 rounded-full"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto backdrop-blur-xs bg-white/5 border border-white/10 rounded-2xl p-8  shadow-lg hover:shadow-primary/10 transition-all"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="cursor-target w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="cursor-target w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              className="cursor-target w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              required
            />
          </div>
          <button
            className="cursor-target flex gap-2 self-start px-6 py-2 rounded-full bg-white-white text-second font-medium hover:bg-primary/80 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            type="submit"
          >
            Say Hello <img src={assets.hello} width={18} alt="" />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ConnectMe;
