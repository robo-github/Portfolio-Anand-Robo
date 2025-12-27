import React from "react";
import { projects } from "../assets/project_images/project";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-4 py-20 scroll-mt-20"
    >
      <div className="flex flex-col items-center gap-2 mb-12">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sub-text-gradient font-extrabold text-2xl sm:text-3xl"
        >
          Featured Projects
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-1 bg-primary/20 rounded-full"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
