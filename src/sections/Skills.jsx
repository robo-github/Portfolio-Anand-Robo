import React from "react";
import { skills } from "../assets/skills";
import { motion } from "framer-motion";
import TargetCursor from "../components/TargetCursor";

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-20 scroll-mt-20">
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
          Tech Arsenal
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-1 bg-primary/20 rounded-full"
        ></motion.div>
      </div>

      <div className="flex flex-col gap-12">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col gap-6 "
          >
            <h3 className="text-white-white/80 text-xl font-semibold pl-4 border-l-4 border-primary/50">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.items.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-target"
                >
                  <div className="h-12 w-12 flex items-center justify-center p-2 rounded-full bg-black/20 group-hover:bg-black/30 transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
