import Contact from "./contact";
import Experience from "./experience";
import Help from "./help";
import NeoFetch from "./neofetch";
import Projects from "./projects";
import type { ReactNode } from "react";
import Skills from "./skills";
import Whoami from "./whoami";
import { openExternalLink } from "@/lib/utils";
import { projects } from "@/features/projects";

type Command = {
  description: string;
  getOutput: (args?: string[]) => ReactNode;
};

export const TERMINAL_COMMANDS: Record<string, Command> = {
  clear: {
    description: "clear the terminal",
    getOutput: () => "__CLEAR__",
  },

  contact: {
    description: "get in touch",
    getOutput: () => <Contact />,
  },

  echo: {
    description: "print text",
    getOutput: (args) =>
      args
        ?.map((str) => str.trim())
        .filter(Boolean)
        .join(" "),
  },

  experience: {
    description: "work history",
    getOutput: () => <Experience />,
  },

  help: {
    description: "show available commands",
    getOutput: () => <Help />,
  },

  neofetch: {
    description: "portfolio information",
    getOutput: () => <NeoFetch />,
  },

  open: {
    description: "open project resource",

    getOutput: (args) => {
      const projectId = args?.at(0);

      if (!projectId) {
        return (
          <p className="text-muted-foreground">
            usage: open &lt;project-id&gt;
          </p>
        );
      }

      const project = projects.find((project) => project.id === projectId);

      if (!project) {
        return (
          <p className="text-destructive">
            project not found:{" "}
            <span className="text-foreground">{projectId}</span>
            <span className="text-muted-foreground">
              {" "}
              (run <span className="text-chart-2">projects</span> to list
              available projects)
            </span>
          </p>
        );
      }

      const link = project.actions?.liveLink || project.actions?.githubLink;

      if (!link) {
        return (
          <div className="space-y-1">
            <p className="text-chart-3">{project.title}</p>

            <p className="text-muted-foreground">
              no public resource available
            </p>

            <p className="text-muted-foreground">
              this project may be private or internal
            </p>
          </div>
        );
      }

      openExternalLink(link);

      return <p className="text-chart-2">opening {project.title}...</p>;
    },
  },

  projects: {
    description: "featured projects",
    getOutput: () => <Projects />,
  },

  skills: {
    description: "technical skills",
    getOutput: () => <Skills />,
  },

  whoami: {
    description: "about me",
    getOutput: () => <Whoami />,
  },
};
