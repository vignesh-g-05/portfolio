import { openExternalLink } from "@/lib/utils";
import { projects } from "@/features/projects";

const Open = ({ projectId }: { projectId?: string }) => {
  if (!projectId) {
    return (
      <p className="text-muted-foreground">usage: open &lt;project-id&gt;</p>
    );
  }

  const project = projects.find(
    (project) =>
      project.id === projectId ||
      project.title.toLowerCase() === projectId.toLowerCase(),
  );

  if (!project) {
    return (
      <p className="text-destructive">
        project not found: <span className="text-foreground">{projectId}</span>
        <span className="text-muted-foreground">
          {" "}
          (run <span className="text-chart-2">projects</span> to list available
          projects)
        </span>
      </p>
    );
  }

  const link = project.actions?.liveLink || project.actions?.githubLink;

  if (!link) {
    return (
      <div className="space-y-1">
        <p className="text-chart-3">{project.title}</p>

        <p className="text-muted-foreground">no public resource available</p>

        <p className="text-muted-foreground">
          this project may be private or internal
        </p>
      </div>
    );
  }

  openExternalLink(link);

  return <p className="text-chart-2">opening {project.title}...</p>;
};

export default Open;
