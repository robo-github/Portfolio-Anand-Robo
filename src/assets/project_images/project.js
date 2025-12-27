import { proj_img } from "../assets";

const { agency_ai, ai, gemini_clone, nike, todo_mern } = proj_img;

export const projects = [
  {
    id: "agency_ai",
    title: "Agency Ai",
    description:
      "A modern AI agency landing experience that showcases services, integrates AI-driven interaction, and provides dynamic UI elements for user engagement.",
    image: agency_ai,
    tech: ["React", "Tailwind CSS", "AI API Integration"],
    liveUrl: "https://agency-ai-robo.netlify.app/",
    repoUrl: "https://github.com/robo-github/Agency_ai",
  },
  {
    id: "nike_store",
    title: "Nike Store (Clone)",
    description:
      "A responsive Nike e-commerce clone built with React and Tailwind, featuring product listings, filtering UI, and cart interface (UI only).",
    image: nike,
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://nike-store-anand.netlify.app/",
    repoUrl: "https://github.com/robo-github/updated-nike-store",
  },
  {
    id: "gemini-clone",
    title: "Gemini Clone",
    description:
      "A Gemini-inspired landing page clone with clean layout and interactive sections, recreated using React and Tailwind CSS..",
    image: gemini_clone,
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://gemini-clone-anand.netlify.app",
    repoUrl: "https://github.com/robo-github/gemini_clone_anand",
  },
  {
    id: "todo",
    title: "To-Do App with Mongo",
    description:
      "A full-stack To-Do application built with React, Node.js/Express, and MongoDB, supporting task creation, editing, and persistence.",
    image: todo_mern,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://react-todo-app-with-mongo.netlify.app/",
    repoUrl: "https://github.com/robo-github/react_to_do_application",
  },
  {
    id: "ccbp-ai",
    title: "Anand AI (anandai.ccbp.tech)",
    description:
      "A modern AI agency landing experience that showcases services, integrates AI-driven interaction, and provides dynamic UI elements for user engagement.",
    image: ai,
    tech: ["HTML", "CSS", "JS", "python", "AI API Integration"],
    liveUrl: "https://anandai.ccbp.tech/",
    repoUrl: "",
  },
];
