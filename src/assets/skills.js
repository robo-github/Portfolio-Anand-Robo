import assets from "./assets";

export const skills = [
  {
    category: "Front-end",
    items: [
      { name: "HTML", icon: assets.html_icon },
      { name: "CSS", icon: assets.css_icon },
      { name: "JavaScript", icon: assets.js_icon },
      { name: "React", icon: assets.react_icon },
      { name: "Tailwind", icon: assets.tailwind_icon },
      { name: "Bootstrap", icon: assets.bootstrap_icon },
      { name: "Next.js", icon: assets.nextjs_icon },
      { name: "Flutter", icon: assets.flutter_icon },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", icon: assets.nodejs_icon },
      { name: "Express.js", icon: assets.express_icon },
      { name: "Python", icon: assets.python_icon },
      { name: "Django", icon: assets.django_icon },
      { name: "Next.js", icon: assets.nextjs_icon },
      { name: "C", icon: assets.c_icon },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: assets.mongodb_icon },
      { name: "Sqlite", icon: assets.sqlite_icon },
      { name: "MySQL", icon: assets.mysql_icon },
      { name: "PostgreSQL", icon: assets.postgresql_icon },
    ],
  },
  {
    category: "DevOps / Tools",
    items: [
      { name: "Git", icon: assets.git_icon },
      { name: "GitHub", icon: assets.git_hub_icon },
      { name: "AWS", icon: assets.aws_icon },
      { name: "Azure", icon: assets.azure_icon },
      { name: "Netlify", icon: assets.netlify_icon },
      { name: "Docker", icon: assets.docker_icon },
      { name: "VsCode", icon: assets.vs_code_icon },
    ],
  },
];
