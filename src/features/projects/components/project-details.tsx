import type { ReactNode } from "react";
import type { Project } from "../types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import ProjectDialogHeader from "./project-dialog/project-dialog-header";
import ProjectInfoHeader from "./project-dialog/project-info-header";
import ProjectPreviewImage from "./project-dialog/project-preview-image";
import ProjectSkills from "./project-dialog/project-skills";

type ProjectDetailsProps = Project & {
  children: ReactNode;
};

export function ProjectDetails({
  children,
  title,
  description,
  image,
  skills,
  actions,
  company,
}: ProjectDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="border-border/40 bg-background max-h-[85vh] border p-0"
      >
        <DialogHeader className="hidden">
          <DialogTitle>Project Details</DialogTitle>
          <DialogDescription>Project details of {title}</DialogDescription>
        </DialogHeader>

        <ProjectDialogHeader title={title} />

        <article className="scrollbar-minimal space-y-5 overflow-y-auto p-5">
          <ProjectInfoHeader
            title={title}
            description={description}
            githubLink={actions?.githubLink}
            liveLink={actions?.liveLink}
            company={company}
          />

          <ProjectPreviewImage title={title} image={image} />

          <ProjectSkills skills={skills} />
        </article>
      </DialogContent>
    </Dialog>
  );
}
