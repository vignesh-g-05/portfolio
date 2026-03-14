import { ChevronRight } from "lucide-react";
import type { Project } from "../types";

const ProjectCard = ({ description, title }: Project) => {
  return (
    <article className="group bg-card border-border/40 flex cursor-pointer items-center justify-between rounded-md border p-4 shadow-sm">
      <div className="space-y-1">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>

        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <ChevronRight
        aria-hidden
        className="text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </article>
  );
};

export default ProjectCard;
