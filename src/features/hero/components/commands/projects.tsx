import { projects } from "@/features/projects";

const Projects = () => {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li key={project.title} className="space-y-1">
          <p className="text-primary flex items-center gap-2 font-bold">
            ◆ {project.title}
          </p>
          <p className="text-chart-3 ml-4 text-xs">
            [{project.skills.join(", ")}]
          </p>
          <p className="text-foreground ml-4 text-xs">{project.description}</p>
          <a
            href={project.actions?.liveLink || project.actions?.githubLink}
            target="_blank"
            rel="noopener noreferer"
            className="text-muted-foreground/70 ml-4 cursor-pointer text-xs italic hover:underline"
          >
            open {project.id}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
