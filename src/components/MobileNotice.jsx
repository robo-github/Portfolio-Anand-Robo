import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show only on mobile screens (less than 768px typically)
    const isMobile = window.innerWidth < 768;
    // Check if user has already seen it this session
    const hasSeenNotice = sessionStorage.getItem("mobile-notice-seen");

    if (isMobile && !hasSeenNotice) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Delay for better effect
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("mobile-notice-seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-end justify-center px-4 pb-10 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-second/80 p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Desktop Experience</h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-300">
                For the best visual experience and interactions, we recommend viewing this site on a <span className="text-white font-medium">Desktop</span> or enabling the <span className="text-white font-medium">"Desktop Site"</span> option in your browser settings.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleClose}
                  className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-second transition-all active:scale-95 hover:bg-primary hover:text-white"
                >
                  Got it, thanks!
                </button>
                <div className="text-[10px] text-center text-gray-500 uppercase tracking-widest">
                  Tap anywhere outside to continue
                </div>
              </div>
            </div>
          </motion.div>
          {/* Backdrop for closing */}
          <div 
            className="absolute inset-0 z-[-1] pointer-events-auto bg-black/20 backdrop-blur-[2px]"
            onClick={handleClose}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNotice;
