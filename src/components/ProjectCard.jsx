import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white/5 rounded-2xl overflow-hidden border backdrop-blur-xs border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm font-medium text-white hover:text-primary transition-colors"
            >
              <img src={assets.tab} alt="Git Repo" className="w-6 h-6" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              <img
                src={assets.git_hub_icon}
                alt="Git Repo"
                className="w-6 h-6"
              />
              Git Repo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
