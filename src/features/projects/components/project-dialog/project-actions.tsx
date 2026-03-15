import { ExternalLink, Github } from "lucide-react";

const ProjectActions = ({
  title,
  githubLink,
  liveLink,
}: {
  title: string;
  liveLink?: string;
  githubLink?: string;
}) => {
  if (!githubLink && !liveLink) return null;
  return (
    <div className="flex items-start gap-2">
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          aria-label={`Open ${title} live demo`}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex size-8 items-center justify-center rounded-md transition-colors md:size-9"
        >
          <ExternalLink className="size-3.5 md:size-4" />
        </a>
      )}

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          aria-label="View source code"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex size-8 items-center justify-center rounded-md transition-colors md:size-9"
        >
          <Github className="size-3.5 md:size-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectActions;
