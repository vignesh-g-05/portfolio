import ProjectCard from "./components/project-card";
import type { Project } from "./types";

const PLACEHOLDER = "https://placehold.co/600x400/EEE/31343C";

const projects: Project[] = [
  {
    title: "ChatMaxima Widget",
    description: "Embeddable AI chat widget for websites",
    skills: ["nextjs", "react", "typescript", "tailwindcss"],
    image: PLACEHOLDER,
  },
  {
    title: "Magic Quill",
    description: "AI powered course generator",
    skills: ["react", "typescript", "redux", "gemini"],
    image: PLACEHOLDER,
  },
  {
    title: "ChatExpress",
    description: "Real-time socket server for chat widget",
    skills: ["nodejs", "express", "socketio", "redis"],
    image: PLACEHOLDER,
  },
  {
    title: "S-Mart",
    description: "Modern e-commerce web application",
    skills: ["react", "redux", "firebase", "framer"],
    image: PLACEHOLDER,
  },
  {
    title: "Snake Game",
    description: "Classic snake game built with canvas",
    skills: ["html", "css", "javascript"],
    image: PLACEHOLDER,
  },
  {
    title: "Memory Card Game",
    description: "Card matching memory game",
    skills: ["html", "css", "javascript"],
    image: PLACEHOLDER,
  },
];

const Projects = () => {
  return (
    <section className="space-y-5" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="font-heading text-3xl font-bold">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
