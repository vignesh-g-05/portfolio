import type { Project } from "./types";
import ProjectCard from "./components/project-card";
import { ProjectDetails } from "./components/project-details";

const IMAGE_BASE_URL = "/images/projects";

export const projects: Project[] = [
  {
    id: "chatmaxima-widget",
    title: "ChatMaxima Widget",
    description: "Embeddable AI chat widget for websites",
    skills: ["nextjs", "react", "typescript", "tailwindcss"],
    image: `${IMAGE_BASE_URL}/widget.png`,
    actions: {
      liveLink: "https://chatmaxima.com",
    },
    company: "techmaxima",
  },
  {
    id: "magic-quill",
    title: "Magic Quill",
    description: "AI powered course generator",
    skills: ["react", "typescript", "redux", "gemini"],
    image: `${IMAGE_BASE_URL}/magic-quill.png`,
    actions: {
      liveLink: "https://magic-quill-ai.vercel.app",
      githubLink: "https://github.com/vignesh-g-05/ai-course-generator",
    },
  },
  {
    id: "chatexpress",
    title: "ChatExpress",
    description: "Real-time socket server for chat widget",
    skills: ["nodejs", "express", "socketio", "redis"],
    image: `${IMAGE_BASE_URL}/chatexpress.png`,
    company: "techmaxima",
  },
  {
    id: "linux-customization",
    title: "Linux Customization",
    description: "custom linux desktop built from scratch",
    skills: ["linux", "bash", "lua", "css"],
    image: `${IMAGE_BASE_URL}/linux.png`,
    actions: {
      liveLink: "/videos/linux-customization.mp4",
      githubLink: "https://github.com/vignesh-g-05/dotfiles",
    },
  },

  {
    id: "chatmaxima-academy",
    title: "ChatMaxima Academy",
    description: "AI powered course generator",
    skills: ["nextjs", "gemini", "neon", "tailwindcss"],
    image: `${IMAGE_BASE_URL}/academy.png`,
    company: "techmaxima",
  },
  {
    id: "s-mart",
    title: "S-Mart",
    description: "Modern e-commerce web application",
    skills: ["react", "redux", "firebase", "framer"],
    image: `${IMAGE_BASE_URL}/s-mart.jpg`,
    actions: {
      liveLink: "https://fir-mart-83485.firebaseapp.com/",
      githubLink: "https://github.com/vignesh-g-05/e-commerce-website",
    },
  },
];

const Projects = () => {
  return (
    <section
      className="scroll-mt-40 space-y-5"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="font-heading text-2xl font-bold md:text-3xl"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectDetails key={project.title} {...project}>
            <ProjectCard
              title={project.title}
              description={project.description}
              company={project.company}
            />
          </ProjectDetails>
        ))}
      </div>
    </section>
  );
};

export default Projects;
